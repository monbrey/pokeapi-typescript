import Collection = require("collection");
import fetch from "node-fetch";
import { INamedApiResource } from "../interfaces/Utility/CommonModels";

export type EndpointParams = number | string | Array<number | string>;

const BASE_URI = "https://pokeapi.co/api/v2";

export default class Endpoint<T> {
    // Name of the API endpoint
    private resource: string;
    // Collection of all cached resources
    private cache: Collection<number, T>;
    // Mapping of names to IDs for cache
    private nameMap: Map<string, number>;

    constructor(resource) {
        this.resource = resource;
        this.cache = new Collection<number, T>();
        this.nameMap = new Map<string, number>();
    }

    public get(param: EndpointParams): T | T[] {
        switch (typeof (param)) {
            case "number":
                return this.cache.get(param);
            case "string":
                return this.cache.get(this.nameMap.get(param));
            case "object":
                return param.map(p => {
                    switch (typeof (p)) {
                        case "number":
                            return this.cache.get(p);
                        case "string":
                            return this.cache.get(this.nameMap.get(p));

                    }
                });
        }
    }

    public getAll(): Collection<number, T> {
        return this.cache;
    }

    public async resolve(param: EndpointParams): Promise<T | T[]> {
        switch (typeof (param)) {
            case "number":
                return this.cache.get(param) || this.fetch(param);
            case "string":
                return this.cache.get(this.nameMap.get(param)) || this.fetch(param);
            case "object":
                return Promise.all(param.map(async p => {
                    switch (typeof (p)) {
                        case "number": return this.cache.get(p) || this.fetch(p);
                        case "string": return this.cache.get(this.nameMap.get(p)) || this.fetch(p);
                    }
                }).flat());
        }
    }

    public async fetch(param: EndpointParams): Promise<T | T[]> {
        if (typeof param === "object") {
            return Promise.all(param.map(async p => {
                const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(res => res.json());
                this.cache.set(data.id, data);
                this.nameMap.set(data.name, data.id);
                return data;
            }));
        } else {
            const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(res => res.json());
            this.cache.set(data.id, data);
            this.nameMap.set(data.name, data.id);
            return data;
        }
    }

    public async fetchAll(): Promise<INamedApiResource<T>> {
        return fetch(`${BASE_URI}/${this.resource}`).then(res => res.json());
    }
}

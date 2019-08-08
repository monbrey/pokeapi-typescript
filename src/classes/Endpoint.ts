import Collection = require("collection");
import fetch from "node-fetch";
import { INamedApiResource } from "../interfaces/Utility/CommonModels";

export type EndpointParam = number | string | Array<number | string>;

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

    /**
     * Retrieves an item from the cache by name or ID
     * @param {EndpointParam} param - The name/ID of the item to get, or Array of names/IDs
     * @returns {?T|Array<?T>}
     */
    public get(param: EndpointParam): T | T[] {
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

    // /**
    //  * Returns all resources currently cached from this endpoint as a Collection
    //  * @returns {Collection<number, T>}
    //  */
    // public getAll(): Collection<number, T> {
    //     return this.cache;
    // }

    /**
     * Gets an item from cache, or attempts to fetch it from the API if no cached resource is available
     * @param {EndpointParam} param - The name/ID of the item to resolve, or Array of names/IDs
     * @returns {Promise<T|T[]>}
     */
    public async resolve(param: EndpointParam): Promise<T | T[]> {
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

    /**
     * Fetches a resource from the API
     * @param {EndpointParam} param - The name/ID of the item to fetch, or Array of names/IDs
     * @param {boolean} [cache=true] - Whether or not to cache this resource
     * @returns {Promise<T|T[]>}
     */
    public async fetch(param: EndpointParam, cache: boolean = true): Promise<T | T[]> {
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

    // /**
    //  * Fetches the resource list from the API. Results are not cached.
    //  * @param {number} [limit=20] - How many resources to fetch
    //  * @param {offset} [offset=0] -
    //  * @returns {Promise<INamedApiResource<T>>}
    //  */
    // public async fetchAll(limit = 20, offset?): Promise<INamedApiResource<T>> {
    //     return fetch(`${BASE_URI}/${this.resource}`).then(res => res.json());
    // }
}

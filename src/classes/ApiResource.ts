import fetch from "node-fetch";
import { IApiResource } from "../interfaces/Utility/CommonModels";
import Endpoint from "./Endpoint";

export default class ApiResource<T> implements IApiResource<T> {
    public url: string;
    private endpoint: Endpoint<T>;

    constructor(data: IApiResource<T>, endpoint: Endpoint<T>, ) {
        this.url = data.url;
        this.endpoint = endpoint;
    }

    public async fetch(cache = true): Promise<T> {
        const data = await fetch(this.url).then(res => res.json());
        if (cache) { this.endpoint._cache(data); }

        return data;
    }
}

import fetch from "node-fetch";
import { URLSearchParams } from "url";
import Endpoint, { EndpointParam } from "./Endpoint";
import NamedApiResourceList from "./NamedApiResourceList";

export type NamedEndpointParam = EndpointParam | string;

const BASE_URI = "https://pokeapi.co/api/v2";

export default class NamedEndpoint<T> extends Endpoint<T> {
    // Mapping of names to IDs for cache
    private nameMap: Map<string, number>;

    constructor(resource) {
        super(resource);
        this.nameMap = new Map<string, number>();
    }

    /**
     * Retrieve a resource from the cache by name or ID
     * @param {NamedEndpointParam} param - The name or ID of the resource to retrieve from cache
     * @returns {?T}
     */
    public get(param: NamedEndpointParam): T {
        return this.cache.get(typeof param === "number" ? param : this.nameMap.get(param.toLowerCase()));
    }

    /**
     * Fetch a resource from the API
     * @param {NamedEndpointParam} param - The name orcID of the resource to fetch
     * @param {boolean} [cache=true] - Whether or not to cache this resource
     * @returns {Promise<T>}
     */
    public async fetch(param: NamedEndpointParam, cache: boolean = true): Promise<T> {
        param = typeof param === "string" ? param.toLowerCase() : param;

        const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(res => res.json());
        this._cache(data);
        return data;
    }

    /**
     * Fetches the resource list from the API. Results are not cached.
     * @param {number} [limit=20] - How many resources to list
     * @param {offset} [offset=0]
     * @returns {Promise<NamedApiResourceList<T>>}
     */
    public async list(limit = 10000, offset = 0): Promise<NamedApiResourceList<T>> {
        const params = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` });
        const list = await fetch(`${BASE_URI}/${this.resource}?${params}`).then(res => res.json());

        return new NamedApiResourceList<T>(list, this);

    }

    public _cache(data) {
        this.cache.set(data.id, data);
        this.nameMap.set(data.name, data.id);
    }
}

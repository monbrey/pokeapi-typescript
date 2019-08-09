import Collection = require("collection");
import fetch from "node-fetch";
import { URLSearchParams } from "url";
import ApiResourceList from "./ApiResourceList";
import NamedApiResourceList from "./NamedApiResourceList";

export type EndpointParam = number;

const BASE_URI = "https://pokeapi.co/api/v2";

export default class Endpoint<T> {
    // Name of the API endpoint
    protected resource: string;
    // Collection of all cached resources
    protected cache: Collection<number, T>;

    constructor(resource) {
        this.resource = resource;
        this.cache = new Collection<number, T>();
    }

    /**
     * Retrieve a resource from the cache
     * @param {EndpointParam} param - The ID of the resource to retrieve from cache
     * @returns {?T}
     */
    public get(param: EndpointParam): T {
        return this.cache.get(param);
    }

    /**
     * Retrieve a resource from cache if it exists, or attempt to fetch it from the API
     * @param {EndpointParam} param - The ID of the resource to resolve
     * @returns {Promise<T>}
     */
    public async resolve(param: EndpointParam): Promise<T> {
        return this.get(param) || this.fetch(param);
    }

    /**
     * Fetch a resource from the API
     * @param {EndpointParam} param - The ID of the item to fetch
     * @param {boolean} [cache=true] - Whether or not to cache this resource
     * @returns {Promise<T>}
     */
    public async fetch(param: EndpointParam, cache: boolean = true): Promise<T> {
        const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(res => res.json());
        this._cache(data);
        return data;
    }

    /**
     * Fetches the resource list from the API. Results are not cached.
     * @param {number} [limit=10000] - How many resources to list
     * @param {offset} [offset=0]
     * @returns {Promise<ApiResourceList<T>>}
     */
    public async list(limit = 10000, offset = 0): Promise<ApiResourceList <T>> {
        const params = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` });
        const list = await fetch(`${BASE_URI}/${this.resource}?${params}`).then(res => res.json());
        return new ApiResourceList<T>(list, this);
    }

    public _cache(data) {
        this.cache.set(data.id, data);
    }
}

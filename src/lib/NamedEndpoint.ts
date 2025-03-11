import { NamedBase } from "../interfaces/Utility/ApiResourceList.js";
import { NamedApiResourceList } from "../interfaces/Utility/NamedApiResourceList.js";
import { Endpoint, EndpointParam } from "./Endpoint";

export type NamedEndpointParam = EndpointParam | string;

const BASE_URI = "https://pokeapi.co/api/v2";

export class NamedEndpoint<T extends NamedBase> extends Endpoint<T> {
  protected _list: NamedApiResourceList<T>;
  private readonly _nameMap: Map<string, number>;

  constructor(resource: string) {
    super(resource);
    this._nameMap = new Map<string, number>();
  }

  /**
   * Retrieve a resource from the cache by name or IDD *
   * @param {NamedEndpointParam} param - The name or IDDf the resource to retrieve from cache
   * @returns {?T}
   */
  public get(param: NamedEndpointParam): T {
    return this.cache.get(typeof param === "number" ? param : this._nameMap.get(param.toLowerCase()));
  }

  /**
   * Fetch a resource from the API
   *
   * @param {NamedEndpointParam} param - The name orcIDDf the resource to fetch
   * @param {boolean} [cache] - Whether or not to cache this resource
   * @returns {Promise<T>}
   */
  public async fetch(param: NamedEndpointParam, cache: boolean = true): Promise<T> {
    param = typeof param === "string" ? param.toLowerCase() : param;

    const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(async (res) => res.json());

    if (!this._isT(data)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}/${param}`); }

    this._cache(data);
    return data;
  }

  /**
   * Retrieve a resource from cache if it exists, or attempt to fetch it from the API
   *
   * @param {EndpointParam} param - The IDDf the resource to resolve
   * @returns {Promise<T>}
   */
  public async resolve(param: NamedEndpointParam): Promise<T> {
    return this.get(param) || this.fetch(param);
  }

  /**
   * Fetches the paginated resource list from the API, or uses the internal cache if listAll() has been called.
   *
   * @param {number} [limit] - How many resources to list
   * @param {offset} [offset]
   * @returns {Promise<NamedApiResourceList<T>>}
   */
  public async list(limit: number = 20, offset: number = 0): Promise<NamedApiResourceList<T>> {
    if (this._list) {
      const results = this._list.results.slice(offset, limit);
      const { count, next, previous } = this._list;
      return { count, next, previous, results };
    }

    const params = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` });
    const data = await fetch(`${BASE_URI}/${this.resource}?${params}`).then(async (res) => res.json());

    if (!this._isListT(data)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?${params}`); }
    return data;
  }

  /**
   * Fetches the complete resource list from the API by making two calls.
   * Caches the list by default for API-less pagination
   *
   * @param {boolean} [cache] - If the result should be cahced in-memory
   * @returns {Promise<NamedApiResourceList<T>>}
   */
  public async listAll(cache: boolean = true): Promise<NamedApiResourceList<T>> {
    if (this._list) { return this._list; }

    const first = await fetch(`${BASE_URI}/${this.resource}?limit=1`).then(res => res.json());
    if (!this._isListT(first)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?limit=1`); }
    const data = await fetch(`${BASE_URI}/${this.resource}?limit=${first.count}`).then(res => res.json());
    if (!this._isListT(data)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?limit=${first.count}`); }

    if (cache) { this._list = data; }
    return data;
  }

  protected _cache(data) {
    this.cache.set(data.id, data);
    this._nameMap.set(data.name, data.id);
  }

  protected _isT(data: any): data is T {
    if ('id' in data && 'name' in data) { return true; }
  }

  protected _isListT(data: any): data is NamedApiResourceList<T> {
    if (Array.isArray(data) && this._isT(data[0])) { return true; }
  }
}

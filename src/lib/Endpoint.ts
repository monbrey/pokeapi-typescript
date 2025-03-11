import { ApiResourceList, Base } from "../interfaces/Utility/ApiResourceList.js";

type EndpointParam = number;

const BASE_URI = "https://pokeapi.co/api/v2";

class Endpoint<T extends Base> {
  protected resource: string;
  protected _list: ApiResourceList<T>;
  protected cache: Map<number, T>;

  constructor(resource: string) {
    this.resource = resource;
    this.cache = new Map<number, T>();
  }

  /**
   * Retrieve a resource from the cache
   * @param {EndpointParam} param - The D of the resource to retrieve from cache
   * @returns {?T}
   */
  public get(param: EndpointParam): T {
    return this.cache.get(param);
  }

  /**
   * Retrieve a resource from cache if it exists, or attempt to fetch it from the API
   * @param {EndpointParam} param - The D of the resource to resolve
   * @returns {Promise<T>}
   */
  public async resolve(param: EndpointParam): Promise<T> {
    return this.get(param) || this.fetch(param);
  }

  /**
   * Fetch a resource from the API
   * @param {EndpointParam} param - The D of the item to fetch
   * @param {boolean} [cache=true] - Whether or not to cache this resource
   * @returns {Promise<T>}
   */
  public async fetch(param: EndpointParam, cache: boolean = true): Promise<T> {
    const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(res => res.json());

    if (!this._isT(data)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}/${param}`); }
    this._cache(data);
    return data;
  }

  /**
   * Fetches the paginated resource list from the API, or uses the internal cache if listAll() has been called.
   * @param {number} [limit=20] - How many resources to list
   * @param {offset} [offset=0]
   * @returns {Promise<NamedApiResourceList<T>>}
   */
  public async list(limit: number = 20, offset: number = 0): Promise<ApiResourceList<T>> {
    if (this._list) {
      const results = this._list.results.slice(offset, limit);
      const { count, next, previous } = this._list;
      return { count, next, previous, results };
    }

    const params = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` });
    const data = await fetch(`${BASE_URI}/${this.resource}?${params}`).then(res => res.json());

    if (!this._isListT(data)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?${params}`); }
    return data;
  }

  public async listAll(cache: boolean = true): Promise<ApiResourceList<T>> {
    if (this._list) { return this._list; }

    const first = await fetch(`${BASE_URI}/${this.resource}?limit=1`).then(res => res.json());
    if (!this._isListT(first)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?limit=1`); }
    const data = await fetch(`${BASE_URI}/${this.resource}?limit=${first.count}`).then(res => res.json());
    if (!this._isListT(data)) { throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?limit=${first.count}`); }

    if (cache) { this._list = data; }
    return data;
  }

  protected _cache(data: T) {
    this.cache.set(data.id, data);
  }

  protected _isT(data: any): data is T {
    if ('id' in data) { return true; }
  }

  protected _isListT(data: any): data is ApiResourceList<T> {
    if (Array.isArray(data) && this._isT(data[0])) { return true; }
  }
}

export { Endpoint, EndpointParam };

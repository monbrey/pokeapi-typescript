import { Collection } from "@discordjs/collection";
import type { ApiResourceList, Base } from "../interfaces/Utility/ApiResourceList.js";

type EndpointParam = number;

const BASE_URI = "https://pokeapi.co/api/v2";

class Endpoint<T extends Base> {
	protected resource: string;

	protected _list?: ApiResourceList<T>;

	protected cache: Collection<number, T>;

	public constructor(resource: string) {
		this.resource = resource;
		this.cache = new Collection<number, T>();
	}

	public get(param: EndpointParam): T | undefined {
		return this.cache.get(param);
	}

	public async resolve(param: EndpointParam): Promise<T> {
		return this.get(param) ?? this.fetch(param);
	}

	public async fetch(param: EndpointParam, cache: boolean = true): Promise<T> {
		const data = await fetch(`${BASE_URI}/${this.resource}/${param}`).then(async (res) => res.json());

		if (!this._isT(data)) {
			throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}/${param}`);
		}

		this._cache(data);
		return data;
	}

	public async list(limit: number = 20, offset: number = 0): Promise<ApiResourceList<T>> {
		if (this._list) {
			const results = this._list.results.slice(offset, limit);
			const { count, next, previous } = this._list;
			return { count, next, previous, results };
		}

		const params = new URLSearchParams({ limit: `${limit}`, offset: `${offset}` });
		const data = await fetch(`${BASE_URI}/${this.resource}?${params}`).then(async (res) => res.json());

		if (!this._isListT(data)) {
			throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?${params}`);
		}

		return data;
	}

	public async listAll(cache: boolean = true): Promise<ApiResourceList<T>> {
		if (this._list) {
			return this._list;
		}

		const first = await fetch(`${BASE_URI}/${this.resource}?limit=1`).then(async (res) => res.json());
		if (!this._isListT(first)) {
			throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?limit=1`);
		}

		const data = await fetch(`${BASE_URI}/${this.resource}?limit=${first.count}`).then(async (res) => res.json());
		if (!this._isListT(data)) {
			throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}?limit=${first.count}`);
		}

		if (cache) {
			this._list = data;
		}

		return data;
	}

	protected _cache(data: T) {
		this.cache.set(data.id, data);
	}

	protected _isT(data: any): data is T {
		return "id" in data;
	}

	protected _isListT(data: any): data is ApiResourceList<T> {
		return Array.isArray(data) && this._isT(data[0]);
	}
}

export { Endpoint, type EndpointParam };

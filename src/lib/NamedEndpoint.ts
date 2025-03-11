import type { NamedBase } from "../interfaces/Utility/ApiResourceList.js";
import type { NamedApiResourceList } from "../interfaces/Utility/NamedApiResourceList.js";
import type { EndpointParam } from "./Endpoint";
import { Endpoint } from "./Endpoint";

export type NamedEndpointParam = EndpointParam | string;

const BASE_URI = "https://pokeapi.co/api/v2";

export class NamedEndpoint<T extends NamedBase> extends Endpoint<T> {
	declare protected _list?: NamedApiResourceList<T>;

	private readonly _nameMap: Map<string, number>;

	public constructor(resource: string) {
		super(resource);
		this._nameMap = new Map<string, number>();
	}

	public get(param: NamedEndpointParam): T | undefined {
		return typeof param === "number" ? this.cache.get(param) : this.cache.get(this._nameMap.get(param.toLowerCase()) ?? 0);
	}

	public async fetch(param: NamedEndpointParam, cache: boolean = true): Promise<T> {
		const _param = typeof param === "string" ? param.toLowerCase() : param;

		const data = await fetch(`${BASE_URI}/${this.resource}/${_param}`).then(async (res) => res.json());

		if (!this._isT(data)) {
			throw new Error(`Invalid data received from ${BASE_URI}/${this.resource}/${_param}`);
		}

		this._cache(data);
		return data;
	}

	public async resolve(param: NamedEndpointParam): Promise<T> {
		return this.get(param) ?? this.fetch(param);
	}

	public async list(limit: number = 20, offset: number = 0): Promise<NamedApiResourceList<T>> {
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

	public async listAll(cache: boolean = true): Promise<NamedApiResourceList<T>> {
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
		this._nameMap.set(data.name, data.id);
	}

	protected _isT(data: any): data is T {
		return "id" in data && "name" in data;
	}

	protected _isListT(data: any): data is NamedApiResourceList<T> {
		return Array.isArray(data) && this._isT(data[0]);
	}
}

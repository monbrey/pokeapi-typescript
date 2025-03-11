import type { Endpoint } from "../../lib/Endpoint";

export type Base = { id: number; };

export type NamedBase = Base & { name: string; };

export type ApiResource<T extends Base> = {
	endpoint?: Endpoint<T>;
	url: string;
};

export type ApiResourceList<T extends Base> = {
	count: number;
	next: string;
	previous: string;
	results: T[];
};

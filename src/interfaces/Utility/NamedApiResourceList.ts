export type NamedApiResource<T> = {
	name: string;
	url: string;
};

export type NamedApiResourceList<T> = {
	count: number;
	next: string;
	previous: string;
	results: T[];
};

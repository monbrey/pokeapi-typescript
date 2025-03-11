import type { Name } from "./CommonModels";

export type Language = {
	id: number;
	iso3166: string;
	iso639: string;
	name: string;
	names: Name[];
	official: boolean;
};

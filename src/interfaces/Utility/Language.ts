import { Name } from "./CommonModels";

export interface Language {
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Name[];
}

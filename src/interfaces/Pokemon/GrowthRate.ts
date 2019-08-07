import { IDescription, INamedApiResource } from "../Utility/CommonModels";
import { IPokemonSpecies } from "./PokemonSpecies";

export interface IGrowthRate {
    id: number;
    name: string;
    formula: string;
    descriptions: IDescription[];
    levels: IGrowthRateExperienceLevel[];
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
}

export interface IGrowthRateExperienceLevel {
    level: number;
    experience: number;
}

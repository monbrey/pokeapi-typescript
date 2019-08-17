import { IDescription} from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
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

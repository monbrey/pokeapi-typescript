import { Description} from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { PokemonSpecies } from "./PokemonSpecies";

export interface GrowthRate {
    id: number;
    name: string;
    formula: string;
    descriptions: Description[];
    levels: GrowthRateExperienceLevel[];
    pokemon_species: ;
}

export interface GrowthRateExperienceLevel {
    level: number;
    experience: number;
}

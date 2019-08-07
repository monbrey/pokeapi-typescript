import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IName, INamedApiResource } from "../Utility/CommonModels";

export interface IPalParkArea {
    id: number;
    name: string;
    names: IName[];
    pokemon_encounters: IPalParkEncounterSpecies[];
}

export interface IPalParkEncounterSpecies {
    base_socre: number;
    rate: number;
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}

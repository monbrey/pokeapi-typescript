import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";

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

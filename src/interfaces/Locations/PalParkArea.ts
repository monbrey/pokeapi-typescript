import { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";

export interface PalParkArea {
    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: PalParkEncounterSpecies[];
}

export interface PalParkEncounterSpecies {
    base_socre: number;
    rate: number;
    pokemon_species: NamedApiResource<PokemonSpecies>;
}

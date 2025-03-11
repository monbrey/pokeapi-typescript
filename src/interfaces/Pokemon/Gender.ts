import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { PokemonSpecies } from "./PokemonSpecies";

export interface Gender {
    id: number;
    name: string;
    pokemon_species_details: PokemonSpeciesGender[];
    required_for_evolution: Array<NamedApiResource<PokemonSpecies>>;
}

export interface PokemonSpeciesGender {
    rate: number;
    pokemon_species: NamedApiResource<PokemonSpecies>;
}

import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IPokemonSpecies } from "./PokemonSpecies";

export interface IGender {
    id: number;
    name: string;
    pokemon_species_details: IPokemonSpeciesGender[];
    required_for_evolution: Array<INamedApiResource<IPokemonSpecies>>;
}

export interface IPokemonSpeciesGender {
    rate: number;
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}

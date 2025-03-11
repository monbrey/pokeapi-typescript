import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { PokemonSpecies } from "./PokemonSpecies";

export interface PokemonColor {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedApiResource<PokemonSpecies>;
}

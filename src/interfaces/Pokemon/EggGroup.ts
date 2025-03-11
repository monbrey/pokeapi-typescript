import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { PokemonSpecies } from "./PokemonSpecies";

export interface EggGroup {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: Array<NamedApiResource<PokemonSpecies>>;
}

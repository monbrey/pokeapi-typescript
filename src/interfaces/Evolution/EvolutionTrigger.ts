import { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";

export interface EvolutionTrigger {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: Array<NamedApiResource<PokemonSpecies>>;
}

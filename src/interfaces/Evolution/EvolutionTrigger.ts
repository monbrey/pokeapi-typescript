import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";

export interface IEvolutionTrigger {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
}

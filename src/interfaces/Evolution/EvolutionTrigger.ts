import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IName, INamedApiResource } from "../Utility/CommonModels";

export interface IEvolutionTrigger {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
}

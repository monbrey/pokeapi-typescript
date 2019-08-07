import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IPokemonSpecies } from "./PokemonSpecies";

export interface IEggGroup {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
}

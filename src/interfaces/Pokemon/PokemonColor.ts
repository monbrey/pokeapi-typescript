import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IPokemonSpecies } from "./PokemonSpecies";

export interface IPokemonColor {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}

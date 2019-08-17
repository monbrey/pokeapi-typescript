import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IPokemonSpecies } from "./PokemonSpecies";

export interface IPokemonColor {
    id: number;
    name: string;
    names: IName[];
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}

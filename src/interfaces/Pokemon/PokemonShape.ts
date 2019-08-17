import { IName } from "../Utility/CommonModels";
import { ILanguage } from "../Utility/Language";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IPokemonSpecies } from "./PokemonSpecies";

export interface IPokemonShape {
    id: number;
    name: string;
    awesome_names: IAwesomeName[];
    names: IName[];
    pokemons_species: Array<INamedApiResource<IPokemonSpecies>>;
}

export interface IAwesomeName {
    awesome_name: string;
    language: INamedApiResource<ILanguage>;
}

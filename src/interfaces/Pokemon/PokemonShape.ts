import { Name } from "../Utility/CommonModels";
import { Language } from "../Utility/Language";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { PokemonSpecies } from "./PokemonSpecies";

export interface PokemonShape {
    id: number;
    name: string;
    awesome_names: AwesomeName[];
    names: Name[];
    pokemons_species: Array<NamedApiResource<PokemonSpecies>>;
}

export interface AwesomeName {
    awesome_name: string;
    language: NamedApiResource<Language>;
}

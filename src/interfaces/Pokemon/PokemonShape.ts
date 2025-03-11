import type { Name } from "../Utility/CommonModels";
import type { Language } from "../Utility/Language";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { PokemonSpecies } from "./PokemonSpecies";

export type PokemonShape = {
	awesome_names: AwesomeName[];
	id: number;
	name: string;
	names: Name[];
	pokemons_species: PokemonSpecies;
};

export type AwesomeName = {
	awesome_name: string;
	language: NamedApiResource<Language>;
};

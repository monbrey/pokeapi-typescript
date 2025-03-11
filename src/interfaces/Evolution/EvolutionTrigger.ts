import type { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";

export type EvolutionTrigger = {
	id: number;
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>[];
};

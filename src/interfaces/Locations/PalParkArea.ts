import type { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";

export type PalParkArea = {
	id: number;
	name: string;
	names: Name[];
	pokemon_encounters: PalParkEncounterSpecies[];
};

export type PalParkEncounterSpecies = {
	base_socre: number;
	pokemon_species: NamedApiResource<PokemonSpecies>;
	rate: number;
};

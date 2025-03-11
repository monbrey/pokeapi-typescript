import type { Description } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { PokemonSpecies } from "./PokemonSpecies";

export type GrowthRate = {
	descriptions: Description[];
	formula: string;
	id: number;
	levels: GrowthRateExperienceLevel[];
	name: string;
	pokemon_species: NamedApiResource<PokemonSpecies>[];
};

export type GrowthRateExperienceLevel = {
	experience: number;
	level: number;
};

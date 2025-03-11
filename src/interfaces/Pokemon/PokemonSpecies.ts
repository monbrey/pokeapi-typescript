import type { EvolutionChain } from "../Evolution/EvolutionChain";
import type { Generation } from "../Games/Generation";
import type { Pokedex } from "../Games/Pokedex";
import type { PalParkArea } from "../Locations/PalParkArea";
import type { ApiResource } from "../Utility/ApiResourceList";
import type { Description, FlavorText, Name } from "../Utility/CommonModels";
import type { Language } from "../Utility/Language";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { EggGroup } from "./EggGroup";
import type { GrowthRate } from "./GrowthRate";
import type { Pokemon } from "./Pokemon";
import type { PokemonColor } from "./PokemonColor";
import type { PokemonHabitat } from "./PokemonHabitat";
import type { PokemonShape } from "./PokemonShape";

export type PokemonSpecies = {
	base_happiness: number;
	capture_rate: number;
	color: NamedApiResource<PokemonColor>;
	egg_groups: NamedApiResource<EggGroup>[];
	evolution_chain: ApiResource<EvolutionChain>;
	evolves_from_species: NamedApiResource<PokemonSpecies>;
	flavor_text_entries: FlavorText[];
	form_descriptions: Description[];
	forms_switchable: boolean;
	gender_rate: number;
	genera: Genus[];
	generation: NamedApiResource<Generation>;
	growth_rate: NamedApiResource<GrowthRate>;
	habitat: NamedApiResource<PokemonHabitat>;
	has_gender_differences: boolean;
	hatch_counter: number;
	id: number;
	is_baby: boolean;
	name: string;
	names: Name[];
	order: number;
	pal_park_encounters: PalParkEnounterArea[];
	pokedex_numbers: PokemonSpeciesDexEntry[];
	shape: NamedApiResource<PokemonShape>;
	varieties: PokemonSpeciesVariety[];
};

export type Genus = {
	genus: string;
	language: NamedApiResource<Language>;
};

export type PokemonSpeciesDexEntry = {
	entry_number: number;
	pokedex: NamedApiResource<Pokedex>;
};

export type PalParkEnounterArea = {
	area: NamedApiResource<PalParkArea>;
	base_score: number;
	rate: number;
};

export type PokemonSpeciesVariety = {
	is_default: boolean;
	pokemon: NamedApiResource<Pokemon>;
};

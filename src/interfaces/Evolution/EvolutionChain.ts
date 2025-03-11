import type { Item } from "../Items/Item";
import type { Location } from "../Locations/Location";
import type { Move } from "../Moves/Move";
import type { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import type { Type } from "../Pokemon/Type";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { EvolutionTrigger } from "./EvolutionTrigger";

export type EvolutionChain = {
	baby_trigger_item: NamedApiResource<Item>;
	chain: ChainLink;
	id: number;
};

export type ChainLink = {
	evolution_details: EvolutionDetail[];
	evolves_to: ChainLink[];
	is_baby: boolean;
	species: NamedApiResource<PokemonSpecies>;
};

export type EvolutionDetail = {
	gender: number;
	held_item: NamedApiResource<Item>;
	item: NamedApiResource<Item>;
	known_move_type: NamedApiResource<Type>;
	location: NamedApiResource<Location>;
	min_affection: number;
	min_beauty: number;
	min_happiness: number;
	min_level: number;
	move: NamedApiResource<Move>;
	needs_overworld_rain: boolean;
	party_species: NamedApiResource<PokemonSpecies>;
	party_type: NamedApiResource<Type>;
	relative_physical_stats: number;
	time_of_day: string;
	trade_species: NamedApiResource<PokemonSpecies>;
	trigger: NamedApiResource<EvolutionTrigger>;
	turn_upside_down: boolean;
};

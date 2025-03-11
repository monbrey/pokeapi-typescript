import type { EvolutionChain } from "../Evolution/EvolutionChain";
import type { Version } from "../Games/Version";
import type { ApiResource } from "../Utility/ApiResourceList";
import type {
	GenerationGameIndex,
	MachineVersionDetail,
	Name,
	VerboseEffect,
	VersionGroupFlavorText,
} from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { ItemAttribute } from "./ItemAttribute";
import type { ItemCategory } from "./ItemCategory";
import type { ItemFlingEffect } from "./ItemFlingEffect";

export type Item = {
	attributes: NamedApiResource<ItemAttribute>[];
	baby_trigger_for: ApiResource<EvolutionChain>;
	category: ItemCategory;
	cost: number;
	effect_entries: VerboseEffect[];
	flavor_text_entries: VersionGroupFlavorText[];
	fling_effect: NamedApiResource<ItemFlingEffect>;
	fling_power: number;
	game_indices: GenerationGameIndex[];
	held_by_pokemon: ItemHolderPokemon[];
	id: number;
	machines: MachineVersionDetail[];
	name: string;
	names: Name[];
	sprites: ItemSprites;
};

export type ItemSprites = { default: string; };

export type ItemHolderPokemon = {
	pokemon: string;
	version_details: ItemHolderPokemonVersionDetail[];
};

export type ItemHolderPokemonVersionDetail = {
	rarity: string;
	version: NamedApiResource<Version>;
};

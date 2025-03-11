import type { Generation } from "../Games/Generation.js";
import type { Version } from "../Games/Version";
import type { VersionGroup } from "../Games/VersionGroup";
import type { Item } from "../Items/Item";
import type { Location } from "../Locations/Location";
import type { Move } from "../Moves/Move";
import type { MoveLearnMethod } from "../Moves/MoveLearnMethod";
import type { VersionEncounterDetail, VersionGameIndex } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Ability } from "./Ability";
import type { PokemonForm } from "./PokemonForm";
import type { PokemonSpecies } from "./PokemonSpecies";
import type { Stat } from "./Stat";
import type { Type } from "./Type";

export type Pokemon = {
	abilities: PokemonAbility[];
	base_experience: number;
	forms: NamedApiResource<PokemonForm>[];
	game_indices: VersionGameIndex[];
	height: number;
	held_items: PokemonHeldItem[];
	id: number;
	is_default: boolean;
	location_area_encounters: string;
	moves: PokemonMove[];
	name: string;
	order: number;
	past_types: PokemonTypePast[];
	species: NamedApiResource<PokemonSpecies>;
	sprites: PokemonSprites;
	stats: PokemonStat[];
	types: PokemonType[];
	weight: number;
};

export type PokemonAbility = {
	ability: NamedApiResource<Ability>;
	is_hidden: true;
	slot: number;
};

export type PokemonType = {
	slot: number;
	type: NamedApiResource<Type>;
};

export type PokemonFormType = {
	slot: number;
	type: NamedApiResource<Type>;
};

export type PokemonTypePast = {
	generation: NamedApiResource<Generation>;
	type: PokemonType[];
};

export type PokemonHeldItem = {
	item: NamedApiResource<Item>;
	version_details: PokemonHeldItemVersion[];
};

export type PokemonHeldItemVersion = {
	rarity: number;
	version: NamedApiResource<Version>;
};

export type PokemonMove = {
	move: NamedApiResource<Move>;
	version_group_details: PokemonMoveVersion[];
};

export type PokemonMoveVersion = {
	level_learned_at: number;
	move_learn_method: NamedApiResource<MoveLearnMethod>;
	version_group: NamedApiResource<VersionGroup>;
};

export type PokemonStat = {
	base_stat: number;
	effort: number;
	stat: NamedApiResource<Stat>;
};

export type PokemonSprites = {
	back_default: string;
	back_female: string;
	back_shiny: string;
	back_shiny_female: string;
	front_default: string;
	front_female: string;
	front_shiny: string;
	front_shiny_female: string;
	other: PokemonSpriteOther;
	versions: PokemonSpriteVersion;
};

type SpriteVariant = {
	back_default: string | null;
	back_female: string | null;
	back_gray: string | null;
	back_shiny: string | null;
	back_shiny_female: string | null;
	front_default: string | null;
	front_female: string | null;
	front_gray: string | null;
	front_shiny: string | null;
	front_shiny_female: string | null;
};

export type PokemonSpriteOther = {
	dream_world: Pick<SpriteVariant, "front_default" | "front_female">;
	"official-artwork": { front_default: string; };
};

type Generation1Sprite = {
	"red-blue": Pick<SpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
	yellow: Pick<SpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
};

type Generation2Sprite = {
	crystal: Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
	gold: Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
	silver: Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
};

type Generation3Sprite = {
	emerald: Pick<SpriteVariant, "front_default" | "front_shiny">;
	"firered-leafgreen": Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
	"ruby-sapphire": Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
};

type Generation4Sprite = {
	"diamond-pearl": Pick<
		SpriteVariant,
        "back_default" | "back_female" | "back_shiny_female" | "back_shiny" | "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
	>;
	"heartgold-soulsilver": Pick<
		SpriteVariant,
        "back_default" | "back_female" | "back_shiny_female" | "back_shiny" | "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
	>;
	platinum: Pick<
		SpriteVariant,
        "back_default" | "back_female" | "back_shiny_female" | "back_shiny" | "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
	>;
};

type BlackWhiteSprite = Pick<
	SpriteVariant,
    "back_default" | "back_female" | "back_shiny_female" | "back_shiny" | "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
>;

type Generation5Sprite = { "black-white": BlackWhiteSprite & { animated: BlackWhiteSprite; }; };

type Generation6Sprite = {
	"omegaruby-alphasapphire": Pick<
		SpriteVariant,
        "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
	>;
	"x-y": Pick<
		SpriteVariant,
        "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
	>;
};

type Generation7Sprite = {
	icons: Pick<SpriteVariant, "front_default" | "front_female">;
	"ultra-sun-ultra-moon": Pick<
		SpriteVariant,
        "front_default" | "front_female" | "front_shiny_female" | "front_shiny"
	>;
};

type Generation8Sprite = { icons: Pick<SpriteVariant, "front_default" | "front_female">; };

type PokemonSpriteVersion = {
	"generation-i": Generation1Sprite;
	"generation-ii": Generation2Sprite;
	"generation-iii": Generation3Sprite;
	"generation-iv": Generation4Sprite;
	"generation-v": Generation5Sprite;
	"generation-vi": Generation6Sprite;
	"generation-vii": Generation7Sprite;
	"generation-viii": Generation8Sprite;
};

export type LocationAreaEncounter = {
	location_area: NamedApiResource<Location>;
	version_details: VersionEncounterDetail[];
};

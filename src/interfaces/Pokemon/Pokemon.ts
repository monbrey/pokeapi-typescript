import { Version } from "../Games/Version";
import { VersionGroup } from "../Games/VersionGroup";
import { Item } from "../Items/Item";
import { Location } from "../Locations/Location";
import { Move } from "../Moves/Move";
import { MoveLearnMethod } from "../Moves/MoveLearnMethod";
import { VersionEncounterDetail, VersionGameIndex } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Ability } from "./Ability";
import { PokemonForm } from "./PokemonForm";
import { PokemonSpecies } from "./PokemonSpecies";
import { Stat } from "./Stat";
import { Type } from "./Type";

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: PokemonAbility[];
    forms: Array<NamedApiResource<PokemonForm>>;
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedApiResource<PokemonSpecies>;
    stats: PokemonStat[];
    types: PokemonType[];
}

export interface PokemonAbility {
    is_hidden: true;
    slot: number;
    ability: NamedApiResource<Ability>;
}

export interface PokemonType {
    slot: number;
    type: NamedApiResource<Type>;
}

export interface PokemonHeldItem {
    item: NamedApiResource<Item>;
    version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
    version: NamedApiResource<Version>;
    rarity: number;
}

export interface PokemonMove {
    move: NamedApiResource<Move>;
    version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
    move_learn_method: NamedApiResource<MoveLearnMethod>;
    version_group: NamedApiResource<VersionGroup>;
    level_learned_at: number;
}

export interface PokemonStat {
    stat: NamedApiResource<Stat>;
    effort: number;
    base_stat: number;
}

export interface PokemonSprites {
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
}

interface SpriteVariant {
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
}

export interface PokemonSpriteOther {
    dream_world: Pick<SpriteVariant, "front_default" | "front_female">;
    "official-artwork": {
        front_default: string;
    };
}

interface Generation1Sprite {
    "red-blue": Pick<SpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
    yellow: Pick<SpriteVariant, "back_default" | "back_gray" | "front_default" | "front_gray">;
}

interface Generation2Sprite {
    crystal: Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    gold: Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    silver: Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
}

interface Generation3Sprite {
    emerald: Pick<SpriteVariant, "front_default" | "front_shiny">;
    "firered-leafgreen": Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
    "ruby-sapphire": Pick<SpriteVariant, "back_default" | "back_shiny" | "front_default" | "front_shiny">;
}

interface Generation4Sprite {
    "diamond-pearl": Pick<
        SpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    "heartgold-soulsilver": Pick<
        SpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    platinum: Pick<
        SpriteVariant,
        "back_default" |
        "back_female" |
        "back_shiny" |
        "back_shiny_female" |
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

type BlackWhiteSprite = Pick<
    SpriteVariant,
    "back_default" |
    "back_female" |
    "back_shiny" |
    "back_shiny_female" |
    "front_default" |
    "front_female" |
    "front_shiny" |
    "front_shiny_female"
>;

interface Generation5Sprite {
    "black-white": BlackWhiteSprite & { animated: BlackWhiteSprite };
}

interface Generation6Sprite {
    "omegaruby-alphasapphire": Pick<
        SpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
    "x-y": Pick<
        SpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

interface Generation7Sprite {
    icons: Pick<SpriteVariant, "front_default" | "front_female">;
    "ultra-sun-ultra-moon": Pick<
        SpriteVariant,
        "front_default" |
        "front_female" |
        "front_shiny" |
        "front_shiny_female"
    >;
}

interface Generation8Sprite {
    icons: Pick<SpriteVariant, "front_default" | "front_female">;
}

interface PokemonSpriteVersion {
    "generation-i": Generation1Sprite;
    "generation-ii": Generation2Sprite;
    "generation-iii": Generation3Sprite;
    "generation-iv": Generation4Sprite;
    "generation-v": Generation5Sprite;
    "generation-vi": Generation6Sprite;
    "generation-vii": Generation7Sprite;
    "generation-viii": Generation8Sprite;
}

export interface LocationAreaEncounter {
    location_area: NamedApiResource<Location>;
    version_details: VersionEncounterDetail[];
}

import { EvolutionChain } from "../Evolution/EvolutionChain";
import { Version } from "../Games/Version";
import { ApiResource } from "../Utility/ApiResourceList";
import {
    GenerationGameIndex,
    MachineVersionDetail,
    Name,
    VerboseEffect,
    VersionGroupFlavorText
} from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { ItemAttribute } from "./ItemAttribute";
import { ItemCategory } from "./ItemCategory";
import { ItemFlingEffect } from "./ItemFlingEffect";

export interface Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: NamedApiResource<ItemFlingEffect>;
    attributes: ;
    category: ItemCategory;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: GenerationGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: ApiResource<EvolutionChain>;
    machines: MachineVersionDetail[];
}

export interface ItemSprites {
    default: string;
}

export interface ItemHolderPokemon {
    pokemon: string;
    version_details: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
    rarity: string;
    version: NamedApiResource<Version>;
}

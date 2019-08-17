import { IEvolutionChain } from "../Evolution/EvolutionChain";
import { IVersion } from "../Games/Version";
import { IApiResource } from "../Utility/ApiResourceList";
import {
    IGenerationGameIndex,
    IMachineVersionDetail,
    IName,
    IVerboseEffect,
    IVersionGroupFlavorText
} from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IItemAttribute } from "./ItemAttribute";
import { IItemCategory } from "./ItemCategory";
import { IItemFlingEffect } from "./ItemFlingEffect";

export interface IItem {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: INamedApiResource<IItemFlingEffect>;
    attributes: Array<INamedApiResource<IItemAttribute>>;
    category: IItemCategory;
    effect_entries: IVerboseEffect[];
    flavor_text_entries: IVersionGroupFlavorText[];
    game_indices: IGenerationGameIndex[];
    names: IName[];
    sprites: IItemSprites;
    held_by_pokemon: IItemHolderPokemon[];
    baby_trigger_for: IApiResource<IEvolutionChain>;
    machines: IMachineVersionDetail[];
}

export interface IItemSprites {
    default: string;
}

export interface IItemHolderPokemon {
    pokemon: string;
    version_details: IItemHolderPokemonVersionDetail[];
}

export interface IItemHolderPokemonVersionDetail {
    rarity: string;
    version: INamedApiResource<IVersion>;
}

import { IGeneration } from "../Games/Generation";
import { IVersionGroup } from "../Games/VersionGroup";
import { IEffect, IName, INamedApiResource, IVerboseEffect } from "../Utility/CommonModels";
import { ILanguage } from "../Utility/Language";
import { IPokemon } from "./Pokemon";

export interface IAbility {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: INamedApiResource<IGeneration>;
    names: IName[];
    effect_entries: IVerboseEffect[];
    effect_changes: IAbilityEffectChange[];
    flavor_text_entries: IAbilityFlavorText[];
    pokemon: IAbilityPokemon[];
}

export interface IAbilityEffectChange {
    effect_entries: IEffect[];
    version_group: INamedApiResource<IVersionGroup>;
}

export interface IAbilityFlavorText {
    flavor_text: string;
    language: INamedApiResource<ILanguage>;
    version_group: INamedApiResource<IVersionGroup>;
}

export interface IAbilityPokemon {
    is_hidden: boolean;
    slot: number;
    pokemon: INamedApiResource<IPokemon>;
}

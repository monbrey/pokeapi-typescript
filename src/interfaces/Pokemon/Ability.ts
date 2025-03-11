import { Generation } from "../Games/Generation";
import { VersionGroup } from "../Games/VersionGroup";
import { Effect, Name, VerboseEffect } from "../Utility/CommonModels";
import { Language } from "../Utility/Language";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Pokemon } from "./Pokemon";

export interface Ability {
    id: number;
    name: string;
    is_main_series: boolean;
    generation: NamedApiResource<Generation>;
    names: Name[];
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: AbilityFlavorText[];
    pokemon: AbilityPokemon[];
}

export interface AbilityEffectChange {
    effect_entries: Effect[];
    version_group: NamedApiResource<VersionGroup>;
}

export interface AbilityFlavorText {
    flavor_text: string;
    language: NamedApiResource<Language>;
    version_group: NamedApiResource<VersionGroup>;
}

export interface AbilityPokemon {
    is_hidden: boolean;
    slot: number;
    pokemon: NamedApiResource<Pokemon>;
}

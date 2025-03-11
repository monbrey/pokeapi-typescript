import { EncounterConditionValue } from "../Encounters/EncounterConditionValue";
import { EncounterMethod } from "../Encounters/EncounterMethod";
import { Generation } from "../Games/Generation";
import { Version } from "../Games/Version";
import { VersionGroup } from "../Games/VersionGroup";
import { Machine } from "../Machines/Machine";
import { ApiResource } from "./ApiResourceList";
import { Language } from "./Language";
import { NamedApiResource } from "./NamedApiResourceList";

export interface CacheableResource {
    id: number;
    name: string;
}

export interface Description {
    description: string;
    language: NamedApiResource<Language>;
}

export interface Effect {
    effet: string;
    language: NamedApiResource<Language>;
}

export interface Encounter {
    min_level: number;
    max_level: number;
    condition_values: ;
    chance: number;
    method: NamedApiResource<EncounterMethod>;
}

export interface FlavorText {
    flavor_text: string;
    language: NamedApiResource<Language>;
    version: NamedApiResource<Version>;
}

export interface GenerationGameIndex {
    game_index: number;
    generation: NamedApiResource<Generation>;
}

export interface MachineVersionDetail {
    machine: ApiResource<Machine>;
    version_group: NamedApiResource<VersionGroup>;
}

export interface Name {
    name: string;
    language: NamedApiResource<Language>;
}

export interface VerboseEffect {
    effect: string;
    short_effect: string;
    language: NamedApiResource<Language>;
}

export interface VersionEncounterDetail {
    version: NamedApiResource<Version>;
    max_chance: number;
    encounter_details: Encounter[];
}

export interface VersionGameIndex {
    game_index: number;
    version: NamedApiResource<Version>;
}

export interface VersionGroupFlavorText {
    text: string;
    language: NamedApiResource<Language>;
    version_group: NamedApiResource<VersionGroup>;
}

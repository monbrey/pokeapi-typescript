import { IEncounterConditionValue } from "../Encounters/EncounterConditionValue";
import { IEncounterMethod } from "../Encounters/EncounterMethod";
import { IGeneration } from "../Games/Generation";
import { IVersion } from "../Games/Version";
import { IVersionGroup } from "../Games/VersionGroup";
import { IMachine } from "../Machines/Machine";
import { IApiResource } from "./ApiResourceList";
import { ILanguage } from "./Language";
import { INamedApiResource } from "./NamedApiResourceList";

export interface ICacheableResource {
    id: number;
    name: string;
}

export interface IDescription {
    description: string;
    language: INamedApiResource<ILanguage>;
}

export interface IEffect {
    effet: string;
    language: INamedApiResource<ILanguage>;
}

export interface IEncounter {
    min_level: number;
    max_level: number;
    condition_values: Array<INamedApiResource<IEncounterConditionValue>>;
    chance: number;
    method: INamedApiResource<IEncounterMethod>;
}

export interface IFlavorText {
    flavor_text: string;
    language: INamedApiResource<ILanguage>;
    version: INamedApiResource<IVersion>;
}

export interface IGenerationGameIndex {
    game_index: number;
    generation: INamedApiResource<IGeneration>;
}

export interface IMachineVersionDetail {
    machine: IApiResource<IMachine>;
    version_group: INamedApiResource<IVersionGroup>;
}

export interface IName {
    name: string;
    language: INamedApiResource<ILanguage>;
}

export interface IVerboseEffect {
    effect: string;
    short_effect: string;
    language: INamedApiResource<ILanguage>;
}

export interface IVersionEncounterDetail {
    version: INamedApiResource<IVersion>;
    max_chance: number;
    encounter_details: IEncounter[];
}

export interface IVersionGameIndex {
    game_index: number;
    version: INamedApiResource<IVersion>;
}

export interface IVersionGroupFlavorText {
    text: string;
    language: INamedApiResource<ILanguage>;
    version_group: INamedApiResource<IVersionGroup>;
}

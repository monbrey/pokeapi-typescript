import type { EncounterConditionValue } from "../Encounters/EncounterConditionValue";
import type { EncounterMethod } from "../Encounters/EncounterMethod";
import type { Generation } from "../Games/Generation";
import type { Version } from "../Games/Version";
import type { VersionGroup } from "../Games/VersionGroup";
import type { Machine } from "../Machines/Machine";
import type { ApiResource } from "./ApiResourceList";
import type { Language } from "./Language";
import type { NamedApiResource } from "./NamedApiResourceList";

export type CacheableResource = {
	id: number;
	name: string;
};

export type Description = {
	description: string;
	language: NamedApiResource<Language>;
};

export type Effect = {
	effet: string;
	language: NamedApiResource<Language>;
};

export type Encounter = {
	chance: number;
	condition_values: NamedApiResource<EncounterConditionValue>[];
	max_level: number;
	method: NamedApiResource<EncounterMethod>;
	min_level: number;
};

export type FlavorText = {
	flavor_text: string;
	language: NamedApiResource<Language>;
	version: NamedApiResource<Version>;
};

export type GenerationGameIndex = {
	game_index: number;
	generation: NamedApiResource<Generation>;
};

export type MachineVersionDetail = {
	machine: ApiResource<Machine>;
	version_group: NamedApiResource<VersionGroup>;
};

export type Name = {
	language: NamedApiResource<Language>;
	name: string;
};

export type VerboseEffect = {
	effect: string;
	language: NamedApiResource<Language>;
	short_effect: string;
};

export type VersionEncounterDetail = {
	encounter_details: Encounter[];
	max_chance: number;
	version: NamedApiResource<Version>;
};

export type VersionGameIndex = {
	game_index: number;
	version: NamedApiResource<Version>;
};

export type VersionGroupFlavorText = {
	language: NamedApiResource<Language>;
	text: string;
	version_group: NamedApiResource<VersionGroup>;
};

import type { ContestEffect } from "../Contests/ContestEffect";
import type { ContestType } from "../Contests/ContestType";
import type { SuperContestEffect } from "../Contests/SuperContestEffect";
import type { Generation } from "../Games/Generation";
import type { VersionGroup } from "../Games/VersionGroup";
import type { AbilityEffectChange } from "../Pokemon/Ability";
import type { Stat } from "../Pokemon/Stat";
import type { Type } from "../Pokemon/Type";
import type { ApiResource } from "../Utility/ApiResourceList";
import type { MachineVersionDetail, Name, VerboseEffect } from "../Utility/CommonModels";
import type { Language } from "../Utility/Language";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { MoveAilment } from "./MoveAilment";
import type { MoveCategory } from "./MoveCategory";
import type { MoveDamageClass } from "./MoveDamageClass";
import type { MoveTarget } from "./MoveTarget";

export type Move = {
	accuracy: number;
	contest_combos: ContestComboSets;
	contest_effect: ApiResource<ContestEffect>;
	contest_type: NamedApiResource<ContestType>;
	damage_class: NamedApiResource<MoveDamageClass>;
	effect_chance: number;
	effect_changes: AbilityEffectChange[];
	effect_entries: VerboseEffect[];
	flavor_text_entries: MoveFlavorText[];
	generation: NamedApiResource<Generation>;
	id: number;
	machines: MachineVersionDetail[];
	meta: MoveMetaData;
	name: string;
	names: Name[];
	past_values: PastMoveStatValues[];
	power: number;
	pp: number;
	priority: number;
	stat_changes: MoveStatChange[];
	super_contest_effect: ApiResource<SuperContestEffect>;
	target: NamedApiResource<MoveTarget>;
	type: NamedApiResource<Type>;
};

export type ContestComboSets = {
	normal: ContestComboDetail;
	super: ContestComboDetail;
};

export type ContestComboDetail = {
	use_after: NamedApiResource<Move>[];
	use_before: NamedApiResource<Move>[];
};

export type MoveFlavorText = {
	flavor_text: string;
	language: NamedApiResource<Language>;
	version_group: NamedApiResource<VersionGroup>;
};

export type MoveMetaData = {
	ailment: NamedApiResource<MoveAilment>;
	ailment_chance: number;
	category: NamedApiResource<MoveCategory>;
	crit_rate: number;
	drain: number;
	flinch_chance: number;
	healing: number;
	max_hits: number;
	max_turns: number;
	min_hits: number;
	min_turns: number;
	stat_chance: number;
};

export type MoveStatChange = {
	change: number;
	stat: NamedApiResource<Stat>;
};

export type PastMoveStatValues = {
	accuracy: number;
	effect_chance: number;
	effect_entries: VerboseEffect[];
	power: number;
	pp: number;
	type: NamedApiResource<Type>;
	version_group: NamedApiResource<VersionGroup>;
};

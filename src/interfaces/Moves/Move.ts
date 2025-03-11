import { ContestEffect } from "../Contests/ContestEffect";
import { ContestType } from "../Contests/ContestType";
import { SuperContestEffect } from "../Contests/SuperContestEffect";
import { Generation } from "../Games/Generation";
import { VersionGroup } from "../Games/VersionGroup";
import { AbilityEffectChange } from "../Pokemon/Ability";
import { Stat } from "../Pokemon/Stat";
import { Type } from "../Pokemon/Type";
import { ApiResource } from "../Utility/ApiResourceList";
import { MachineVersionDetail, Name, VerboseEffect } from "../Utility/CommonModels";
import { Language } from "../Utility/Language";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { MoveAilment } from "./MoveAilment";
import { MoveCategory } from "./MoveCategory";
import { MoveDamageClass } from "./MoveDamageClass";
import { MoveTarget } from "./MoveTarget";

export interface Move {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
    contest_combos: ContestComboSets;
    contest_type: NamedApiResource<ContestType>;
    contest_effect: ApiResource<ContestEffect>;
    damage_class: NamedApiResource<MoveDamageClass>;
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    flavor_text_entries: MoveFlavorText[];
    generation: NamedApiResource<Generation>;
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: ApiResource<SuperContestEffect>;
    target: NamedApiResource<MoveTarget>;
    type: NamedApiResource<Type>;
}

export interface ContestComboSets {
    normal: ContestComboDetail;
    super: ContestComboDetail;
}

export interface ContestComboDetail {
    use_before: Array<NamedApiResource<Move>>;
    use_after: Array<NamedApiResource<Move>>;
}

export interface MoveFlavorText {
    flavor_text: string;
    language: NamedApiResource<Language>;
    version_group: NamedApiResource<VersionGroup>;
}

export interface MoveMetaData {
    ailment: NamedApiResource<MoveAilment>;
    category: NamedApiResource<MoveCategory>;
    min_hits: number;
    max_hits: number;
    min_turns: number;
    max_turns: number;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
}

export interface MoveStatChange {
    change: number;
    stat: NamedApiResource<Stat>;
}

export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: VerboseEffect[];
    type: NamedApiResource<Type>;
    version_group: NamedApiResource<VersionGroup>;
}

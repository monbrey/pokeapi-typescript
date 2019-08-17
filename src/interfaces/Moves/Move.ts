import { IContestEffect } from "../Contests/ContestEffect";
import { IContestType } from "../Contests/ContestType";
import { ISuperContestEffect } from "../Contests/SuperContestEffect";
import { IGeneration } from "../Games/Generation";
import { IVersionGroup } from "../Games/VersionGroup";
import { IAbilityEffectChange } from "../Pokemon/Ability";
import { IStat } from "../Pokemon/Stat";
import { IType } from "../Pokemon/Type";
import { IApiResource } from "../Utility/ApiResourceList";
import { IMachineVersionDetail, IName, IVerboseEffect } from "../Utility/CommonModels";
import { ILanguage } from "../Utility/Language";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IMoveAilment } from "./MoveAilment";
import { IMoveCategory } from "./MoveCategory";
import { IMoveDamageClass } from "./MoveDamageClass";
import { IMoveTarget } from "./MoveTarget";

export interface IMove {
    id: number;
    name: string;
    accuracy: number;
    effect_chance: number;
    pp: number;
    priority: number;
    power: number;
    contest_combos: IContestComboSets;
    contest_type: INamedApiResource<IContestType>;
    contest_effect: IApiResource<IContestEffect>;
    damage_class: INamedApiResource<IMoveDamageClass>;
    effect_entries: IVerboseEffect[];
    effect_changes: IAbilityEffectChange[];
    flavor_text_entries: IMoveFlavorText[];
    generation: INamedApiResource<IGeneration>;
    machines: IMachineVersionDetail[];
    meta: IMoveMetaData;
    names: IName[];
    past_values: IPastMoveStatValues[];
    stat_changes: IMoveStatChange[];
    super_contest_effect: IApiResource<ISuperContestEffect>;
    target: INamedApiResource<IMoveTarget>;
    type: INamedApiResource<IType>;
}

export interface IContestComboSets {
    normal: IContestComboDetail;
    super: IContestComboDetail;
}

export interface IContestComboDetail {
    use_before: Array<INamedApiResource<IMove>>;
    use_after: Array<INamedApiResource<IMove>>;
}

export interface IMoveFlavorText {
    flavor_text: string;
    language: INamedApiResource<ILanguage>;
    version_group: INamedApiResource<IVersionGroup>;
}

export interface IMoveMetaData {
    ailment: INamedApiResource<IMoveAilment>;
    category: INamedApiResource<IMoveCategory>;
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

export interface IMoveStatChange {
    change: number;
    stat: INamedApiResource<IStat>;
}

export interface IPastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: IVerboseEffect[];
    type: INamedApiResource<IType>;
    version_group: INamedApiResource<IVersionGroup>;
}

import { Move } from "../Moves/Move";
import { MoveDamageClass } from "../Moves/MoveDamageClass";
import { ApiResource } from "../Utility/ApiResourceList";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Characteristic } from "./Characteristic";
import { Nature } from "./Nature";

export interface Stat {
    id: number;
    name: string;
    name_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: ApiResource<Characteristic>;
    move_damage_class: NamedApiResource<MoveDamageClass>;
    names: Name[];
}

export interface MoveStatAffectSets {
    increase: MoveStatAffect[];
    decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
    change: number;
    move: NamedApiResource<Move>;
}

export interface NatureStatAffectSets {
    increase: Array<NamedApiResource<Nature>>;
    decrease: Array<NamedApiResource<Nature>>;
}

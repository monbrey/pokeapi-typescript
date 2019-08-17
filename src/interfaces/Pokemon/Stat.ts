import { IMove } from "../Moves/Move";
import { IMoveDamageClass } from "../Moves/MoveDamageClass";
import { IApiResource } from "../Utility/ApiResourceList";
import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { ICharacteristic } from "./Characteristic";
import { INature } from "./Nature";

export interface IStat {
    id: number;
    name: string;
    name_index: number;
    is_battle_only: boolean;
    affecting_moves: IMoveStatAffectSets;
    affecting_natures: INatureStatAffectSets;
    characteristics: IApiResource<ICharacteristic>;
    move_damage_class: INamedApiResource<IMoveDamageClass>;
    names: IName[];
}

export interface IMoveStatAffectSets {
    increase: IMoveStatAffect[];
    decrease: IMoveStatAffect[];
}

export interface IMoveStatAffect {
    change: number;
    move: INamedApiResource<IMove>;
}

export interface INatureStatAffectSets {
    increase: Array<INamedApiResource<INature>>;
    decrease: Array<INamedApiResource<INature>>;
}

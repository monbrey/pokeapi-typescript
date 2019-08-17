import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { INature } from "./Nature";

export interface IPokeathlonStat {
    id: number;
    name: string;
    names: IName[];
    affecting_natures: INaturePokeathlonStatAffectSets;
}

export interface INaturePokeathlonStatAffectSets {
    increase: INaturePokeathlonStatAffect[];
    decrease: INaturePokeathlonStatAffect[];
}

export interface INaturePokeathlonStatAffect {
    max_change: number;
    nature: INamedApiResource<INature>;
}

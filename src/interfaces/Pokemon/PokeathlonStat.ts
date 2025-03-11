import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Nature } from "./Nature";

export interface PokeathlonStat {
    id: number;
    name: string;
    names: Name[];
    affecting_natures: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
    increase: NaturePokeathlonStatAffect[];
    decrease: NaturePokeathlonStatAffect[];
}

export interface NaturePokeathlonStatAffect {
    max_change: number;
    nature: NamedApiResource<Nature>;
}

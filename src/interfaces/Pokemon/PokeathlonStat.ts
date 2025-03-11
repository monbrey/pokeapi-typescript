import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Nature } from "./Nature";

export type PokeathlonStat = {
	affecting_natures: NaturePokeathlonStatAffectSets;
	id: number;
	name: string;
	names: Name[];
};

export type NaturePokeathlonStatAffectSets = {
	decrease: NaturePokeathlonStatAffect[];
	increase: NaturePokeathlonStatAffect[];
};

export type NaturePokeathlonStatAffect = {
	max_change: number;
	nature: NamedApiResource<Nature>;
};

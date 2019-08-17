import { IContestType } from "../Contests/ContestType";
import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IBerry } from "./Berry";

export interface IBerryFlavor {
    id: number;
    name: string;
    berries: IFlavorBerryMap[];
    contest_type: INamedApiResource<IContestType>;
    names: IName[];
}

export interface IFlavorBerryMap {
    potency: number;
    berry: INamedApiResource<IBerry>;
}

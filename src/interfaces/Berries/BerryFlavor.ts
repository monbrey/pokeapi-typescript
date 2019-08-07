import { IContestType } from "../Contests/ContestType";
import { IName, INamedApiResource } from "../Utility/CommonModels";
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

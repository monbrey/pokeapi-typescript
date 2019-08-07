import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IBerry } from "./berry";

export interface IBerryFirmness {
    id: number;
    name: string;
    berries: Array<INamedApiResource<IBerry>>;
    names: IName[];
}

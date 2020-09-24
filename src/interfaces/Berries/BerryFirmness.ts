import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IBerry } from "./Berry";

export interface IBerryFirmness {
    id: number;
    name: string;
    berries: Array<INamedApiResource<IBerry>>;
    names: IName[];
}

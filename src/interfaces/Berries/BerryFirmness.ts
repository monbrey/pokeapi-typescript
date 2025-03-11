import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Berry } from "./Berry";

export interface BerryFirmness {
    id: number;
    name: string;
    berries: Array<NamedApiResource<Berry>>;
    names: Name[];
}

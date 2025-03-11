import { ContestType } from "../Contests/ContestType";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Berry } from "./Berry";

export interface BerryFlavor {
    id: number;
    name: string;
    berries: FlavorBerryMap[];
    contest_type: NamedApiResource<ContestType>;
    names: Name[];
}

export interface FlavorBerryMap {
    potency: number;
    berry: NamedApiResource<Berry>;
}

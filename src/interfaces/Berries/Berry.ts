import { IItem } from "../Items/Item";
import { IType } from "../Pokemon/Type";
import { INamedApiResource } from "../Utility/CommonModels";
import { IBerryFirmness } from "./BerryFirmness";
import { IBerryFlavor } from "./BerryFlavor";

export interface IBerry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: INamedApiResource<IBerryFirmness>;
    flavors: IBerryFlavorMap[];
    item: INamedApiResource<IItem>;
    natural_gift_type: INamedApiResource<IType>;
}

export interface IBerryFlavorMap {
    potency: number;
    flavor: INamedApiResource<IBerryFlavor>;
}

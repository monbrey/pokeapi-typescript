import { IItem } from "../Items/Item";
import { IType } from "../Pokemon/Type";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
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

export class Berry implements IBerry {
    public id: number;
    public name: string;
    public growth_time: number;
    public max_harvest: number;
    public natural_gift_power: number;
    public size: number;
    public smoothness: number;
    public soil_dryness: number;
    public firmness: INamedApiResource<IBerryFirmness>;
    public flavors: IBerryFlavorMap[];
    public item: INamedApiResource<IItem>;
    public natural_gift_type: INamedApiResource<IType>;
}

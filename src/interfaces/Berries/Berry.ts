import { Item } from "../Items/Item";
import { Type } from "../Pokemon/Type";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { BerryFirmness } from "./BerryFirmness";
import { BerryFlavor } from "./BerryFlavor";

export interface Berry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: NamedApiResource<BerryFirmness>;
    flavors: BerryFlavorMap[];
    item: NamedApiResource<Item>;
    natural_gift_type: NamedApiResource<Type>;
}

export interface BerryFlavorMap {
    potency: number;
    flavor: NamedApiResource<BerryFlavor>;
}
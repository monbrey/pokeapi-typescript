import type { Item } from "../Items/Item";
import type { Type } from "../Pokemon/Type";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { BerryFirmness } from "./BerryFirmness";
import type { BerryFlavor } from "./BerryFlavor";

export type Berry = {
	firmness: NamedApiResource<BerryFirmness>;
	flavors: BerryFlavorMap[];
	growth_time: number;
	id: number;
	item: NamedApiResource<Item>;
	max_harvest: number;
	name: string;
	natural_gift_power: number;
	natural_gift_type: NamedApiResource<Type>;
	size: number;
	smoothness: number;
	soil_dryness: number;
};

export type BerryFlavorMap = {
	flavor: NamedApiResource<BerryFlavor>;
	potency: number;
};

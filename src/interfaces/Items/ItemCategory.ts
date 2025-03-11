import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Item } from "./Item";
import type { ItemPocket } from "./ItemPocket";

export type ItemCategory = {
	id: number;
	items: NamedApiResource<Item>[];
	name: string;
	names: Name[];
	pocket: NamedApiResource<ItemPocket>;
};

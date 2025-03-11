import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { ItemCategory } from "./ItemCategory";

export type ItemPocket = {
	categories: NamedApiResource<ItemCategory>[];
	id: number;
	name: string;
};

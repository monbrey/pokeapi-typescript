import type { Effect } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Item } from "./Item";

export type ItemFlingEffect = {
	effect_entries: Effect[];
	id: number;
	items: NamedApiResource<Item>[];
	name: string;
};

import type { Description, Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Item } from "./Item";

export type ItemAttribute = {
	descriptions: Description[];
	id: number;
	items: NamedApiResource<Item>[];
	name: string;
	names: Name[];
};

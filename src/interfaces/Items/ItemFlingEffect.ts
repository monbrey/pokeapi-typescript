import { Effect } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Item } from "./Item";

export interface ItemFlingEffect {
    id: number;
    name: string;
    effect_entries: Effect[];
    items: Array<NamedApiResource<Item>>;
}

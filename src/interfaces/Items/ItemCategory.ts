import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Item } from "./Item";
import { ItemPocket } from "./ItemPocket";

export interface ItemCategory {
    id: number;
    name: string;
    items: ;
    names: Name[];
    pocket: NamedApiResource<ItemPocket>;
}

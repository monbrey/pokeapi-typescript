import { Description, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Item } from "./Item";

export interface ItemAttribute {
    id: number;
    name: string;
    items: Array<NamedApiResource<Item>>;
    names: Name[];
    descriptions: Description[];
}

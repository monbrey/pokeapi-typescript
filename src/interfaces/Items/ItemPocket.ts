import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IItemCategory } from "./ItemCategory";

export interface IItemPocket {
    id: number;
    name: string;
    categories: Array<INamedApiResource<IItemCategory>>;
}

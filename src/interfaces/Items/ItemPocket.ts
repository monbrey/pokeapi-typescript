import { INamedApiResource } from "../Utility/CommonModels";
import { IItemCategory } from "./ItemCategory";

export interface IItemPocket {
    id: number;
    name: string;
    categories: Array<INamedApiResource<IItemCategory>>;
}

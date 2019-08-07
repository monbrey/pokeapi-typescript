import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IItem } from "./Item";
import { IItemPocket } from "./ItemPocket";

export interface IItemCategory {
    id: number;
    name: string;
    items: Array<INamedApiResource<IItem>>;
    names: IName[];
    pocket: INamedApiResource<IItemPocket>;
}

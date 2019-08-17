import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IItem } from "./Item";
import { IItemPocket } from "./ItemPocket";

export interface IItemCategory {
    id: number;
    name: string;
    items: Array<INamedApiResource<IItem>>;
    names: IName[];
    pocket: INamedApiResource<IItemPocket>;
}

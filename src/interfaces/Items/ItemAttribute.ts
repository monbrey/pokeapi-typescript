import { IDescription, IName, INamedApiResource } from "../Utility/CommonModels";
import { IItem } from "./Item";

export interface IItemAttribute {
    id: number;
    name: string;
    items: Array<INamedApiResource<IItem>>;
    names: IName[];
    descriptions: IDescription[];
}

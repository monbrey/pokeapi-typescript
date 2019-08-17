import { IDescription, IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IItem } from "./Item";

export interface IItemAttribute {
    id: number;
    name: string;
    items: Array<INamedApiResource<IItem>>;
    names: IName[];
    descriptions: IDescription[];
}

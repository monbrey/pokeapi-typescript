import { IEffect } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IItem } from "./Item";

export interface IItemFlingEffect {
    id: number;
    name: string;
    effect_entries: IEffect[];
    items: Array<INamedApiResource<IItem>>;
}

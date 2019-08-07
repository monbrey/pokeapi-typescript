import { IEffect, INamedApiResource } from "../Utility/CommonModels";
import { IItem } from "./Item";

export interface IItemFlingEffect {
    id: number;
    name: string;
    effect_entries: IEffect[];
    items: Array<INamedApiResource<IItem>>;
}

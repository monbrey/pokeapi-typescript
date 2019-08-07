import { IEffect, IFlavorText } from "../Utility/CommonModels";

export interface IContestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: IEffect[];
    flavor_text_entries: IFlavorText[];
}

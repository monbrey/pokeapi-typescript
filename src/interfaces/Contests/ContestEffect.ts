import { Effect, FlavorText } from "../Utility/CommonModels";

export interface ContestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect[];
    flavor_text_entries: FlavorText[];
}

import type { Effect, FlavorText } from "../Utility/CommonModels";

export type ContestEffect = {
	appeal: number;
	effect_entries: Effect[];
	flavor_text_entries: FlavorText[];
	id: number;
	jam: number;
};

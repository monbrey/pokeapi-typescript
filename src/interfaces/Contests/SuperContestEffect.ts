import { Move } from "../Moves/Move.js";
import { FlavorText } from "../Utility/CommonModels.js";
import { NamedApiResource } from "../Utility/NamedApiResourceList.js";

export type SuperContestEffect = {
	flavor_text_entries: FlavorText[];
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
};

import type { Description } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Move } from "./Move";

export type MoveCategory = {
	descriptions: Description[];
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
};

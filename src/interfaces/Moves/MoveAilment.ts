import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Move } from "./Move";

export type MoveAilment = {
	id: number;
	moves: NamedApiResource<Move>[];
	name: string;
	names: Name[];
};

import type { GenerationGameIndex, Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { LocationArea } from "./LocationArea";
import type { Region } from "./Region";

export type Location = {
	areas: NamedApiResource<LocationArea>[];
	game_indices: GenerationGameIndex[];
	id: number;
	name: string;
	names: Name[];
	region: NamedApiResource<Region>;
};

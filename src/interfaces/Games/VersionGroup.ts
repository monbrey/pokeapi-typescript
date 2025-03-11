import type { Region } from "../Locations/Region";
import type { MoveLearnMethod } from "../Moves/MoveLearnMethod";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Generation } from "./Generation";
import type { Pokedex } from "./Pokedex";
import type { Version } from "./Version";

export type VersionGroup = {
	generation: NamedApiResource<Generation>;
	id: number;
	move_learn_methods: NamedApiResource<MoveLearnMethod>[];
	name: string;
	order: number;
	pokedexes: NamedApiResource<Pokedex>[];
	regions: NamedApiResource<Region>[];
	versions: NamedApiResource<Version>[];
};

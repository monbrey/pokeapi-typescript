import type { Generation } from "../Games/Generation";
import type { Pokedex } from "../Games/Pokedex";
import type { VersionGroup } from "../Games/VersionGroup";
import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Location } from "./Location";

export type Region = {
	id: number;
	locations: NamedApiResource<Location>[];
	main_generation: NamedApiResource<Generation>;
	name: string;
	names: Name[];
	pokedexes: NamedApiResource<Pokedex>[];
	version_groups: NamedApiResource<VersionGroup>[];
};

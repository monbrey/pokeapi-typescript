import type { Region } from "../Locations/Region";
import type { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import type { Description, Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { VersionGroup } from "./VersionGroup";

export type Pokedex = {
	descriptions: Description[];
	id: number;
	is_main_series: boolean;
	name: string;
	names: Name[];
	pokemon_entries: PokemonEntry[];
	region: NamedApiResource<Region>;
	version_groups: NamedApiResource<VersionGroup>[];
};

export type PokemonEntry = {
	entry_number: number;
	pokemon_species: NamedApiResource<PokemonSpecies>;
};

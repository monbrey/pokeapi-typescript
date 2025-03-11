import type { Region } from "../Locations/Region";
import type { Move } from "../Moves/Move";
import type { Ability } from "../Pokemon/Ability";
import type { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import type { Type } from "../Pokemon/Type";
import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { VersionGroup } from "./VersionGroup";

export type Generation = {
	abilities: NamedApiResource<Ability>[];
	id: number;
	main_region: NamedApiResource<Region>;
	moves: NamedApiResource<Move>[];
	name: string;
	names: Name[];
	pokemon_species: NamedApiResource<PokemonSpecies>[];
	types: NamedApiResource<Type>[];
	version_groups: NamedApiResource<VersionGroup>[];
};

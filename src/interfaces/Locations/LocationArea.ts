import type { EncounterMethod } from "../Encounters/EncounterMethod";
import type { Version } from "../Games/Version";
import type { Pokemon } from "../Pokemon/Pokemon";
import type { Name, VersionEncounterDetail } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Location } from "./Location";

export type LocationArea = {
	encounter_method_rates: EncounterMethodRate[];
	game_index: number;
	id: number;
	location: NamedApiResource<Location>;
	name: string;
	names: Name[];
	pokemon_encounters: PokemonEncounter[];
};

export type EncounterMethodRate = {
	encounter_method: NamedApiResource<EncounterMethod>;
	version_details: EncounterVersionDetails[];
};

export type EncounterVersionDetails = {
	rate: number;
	version_details: NamedApiResource<Version>;
};

export type PokemonEncounter = {
	pokemon: NamedApiResource<Pokemon>;
	version_details: VersionEncounterDetail[];
};

import { EncounterMethod } from "../Encounters/EncounterMethod";
import { Version } from "../Games/Version";
import { Pokemon } from "../Pokemon/Pokemon";
import { Name, VersionEncounterDetail } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Location } from "./Location";

export interface LocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: EncounterMethodRate[];
    location: NamedApiResource<Location>;
    names: Name[];
    pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
    encounter_method: NamedApiResource<EncounterMethod>;
    version_details: EncounterVersionDetails[];
}

export interface EncounterVersionDetails {
    rate: number;
    version_details: NamedApiResource<Version>;
}

export interface PokemonEncounter {
    pokemon: NamedApiResource<Pokemon>;
    version_details: VersionEncounterDetail[];
}

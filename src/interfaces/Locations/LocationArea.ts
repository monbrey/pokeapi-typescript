import { IEncounterMethod } from "../Encounters/EncounterMethod";
import { IVersion } from "../Games/Version";
import { IPokemon } from "../Pokemon/Pokemon";
import { IName, IVersionEncounterDetail } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { ILocation } from "./Location";

export interface ILocationArea {
    id: number;
    name: string;
    game_index: number;
    encounter_method_rates: IEncounterMethodRate[];
    location: INamedApiResource<ILocation>;
    names: IName[];
    pokemon_encounters: IPokemonEncounter[];
}

export interface IEncounterMethodRate {
    encounter_method: INamedApiResource<IEncounterMethod>;
    version_details: IEncounterVersionDetails[];
}

export interface IEncounterVersionDetails {
    rate: number;
    version_details: INamedApiResource<IVersion>;
}

export interface IPokemonEncounter {
    pokemon: INamedApiResource<IPokemon>;
    version_details: IVersionEncounterDetail[];
}

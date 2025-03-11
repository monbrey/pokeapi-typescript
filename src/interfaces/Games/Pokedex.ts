import { Region } from "../Locations/Region";
import { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import { Description, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { VersionGroup } from "./VersionGroup";

export interface Pokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: NamedApiResource<Region>;
    version_groups: ;
}

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: NamedApiResource<PokemonSpecies>;
}

import { IRegion } from "../Locations/Region";
import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IDescription, IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IVersionGroup } from "./VersionGroup";

export interface IPokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: IDescription[];
    names: IName[];
    pokemon_entries: IPokemonEntry[];
    region: INamedApiResource<IRegion>;
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

export interface IPokemonEntry {
    entry_number: number;
    pokemon_species: INamedApiResource<IPokemonSpecies>;
}

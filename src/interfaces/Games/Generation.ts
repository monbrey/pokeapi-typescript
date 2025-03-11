import { Region } from "../Locations/Region";
import { Move } from "../Moves/Move";
import { Ability } from "../Pokemon/Ability";
import { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import { Type } from "../Pokemon/Type";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { VersionGroup } from "./VersionGroup";

export interface Generation {
    id: number;
    name: string;
    abilities: ;
    names: Name[];
    main_region: NamedApiResource<Region>;
    moves: ;
    pokemon_species: ;
    types: ;
    version_groups: ;
}

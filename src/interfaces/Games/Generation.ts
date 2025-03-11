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
    abilities: Array<NamedApiResource<Ability>>;
    names: Name[];
    main_region: NamedApiResource<Region>;
    moves: Array<NamedApiResource<Move>>;
    pokemon_species: Array<NamedApiResource<PokemonSpecies>>;
    types: Array<NamedApiResource<Type>>;
    version_groups: Array<NamedApiResource<VersionGroup>>;
}

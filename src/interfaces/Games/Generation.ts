import { IRegion } from "../Locations/Region";
import { IMove } from "../Moves/Move";
import { IAbility } from "../Pokemon/Ability";
import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IType } from "../Pokemon/Type";
import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IVersionGroup } from "./VersionGroup";

export interface IGeneration {
    id: number;
    name: string;
    abilities: Array<INamedApiResource<IAbility>>;
    names: IName[];
    main_region: INamedApiResource<IRegion>;
    moves: Array<INamedApiResource<IMove>>;
    pokemon_species: Array<INamedApiResource<IPokemonSpecies>>;
    types: Array<INamedApiResource<IType>>;
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

import { IVersion } from "../Games/Version";
import { IVersionGroup } from "../Games/VersionGroup";
import { IItem } from "../Items/Item";
import { ILocation } from "../Locations/Location";
import { IMove } from "../Moves/Move";
import { IMoveLearnMethod } from "../Moves/MoveLearnMethod";
import { IVersionEncounterDetail, IVersionGameIndex } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IAbility } from "./Ability";
import { IPokemonForm } from "./PokemonForm";
import { IPokemonSpecies } from "./PokemonSpecies";
import { IStat } from "./Stat";
import { IType } from "./Type";

export interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: IPokemonAbility[];
    forms: Array<INamedApiResource<IPokemonForm>>;
    game_indices: IVersionGameIndex[];
    held_items: IPokemonHeldItem[];
    location_area_encounters: string;
    moves: IPokemonMove[];
    sprites: IPokemonSprites;
    species: INamedApiResource<IPokemonSpecies>;
    stats: IPokemonStat[];
    types: IPokemonType[];
}

export interface IPokemonAbility {
    is_hidden: true;
    slot: number;
    ability: INamedApiResource<IAbility>;
}

export interface IPokemonType {
    slot: number;
    type: INamedApiResource<IType>;
}

export interface IPokemonHeldItem {
    item: INamedApiResource<IItem>;
    version_details: IPokemonHeldItemVersion[];
}

export interface IPokemonHeldItemVersion {
    version: INamedApiResource<IVersion>;
    rarity: number;
}

export interface IPokemonMove {
    move: INamedApiResource<IMove>;
    version_group_details: IPokemonMoveVersion[];
}

export interface IPokemonMoveVersion {
    move_learn_method: INamedApiResource<IMoveLearnMethod>;
    version_group: INamedApiResource<IVersionGroup>;
    level_learned_at: number;
}

export interface IPokemonStat {
    stat: INamedApiResource<IStat>;
    effort: number;
    base_stat: number;
}

export interface IPokemonSprites {
    front_default: string;
    front_shiny: string;
    front_female: string;
    front_shiny_female: string;
    back_default: string;
    back_shiny: string;
    back_female: string;
    back_shiny_female: string;
}

export interface ILocationAreaEncounter {
    location_area: INamedApiResource<ILocation>;
    version_details: IVersionEncounterDetail[];
}

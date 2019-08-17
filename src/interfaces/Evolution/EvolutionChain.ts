import { IItem } from "../Items/Item";
import { ILocation } from "../Locations/Location";
import { IMove } from "../Moves/Move";
import { IPokemonSpecies } from "../Pokemon/PokemonSpecies";
import { IType } from "../Pokemon/Type";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IEvolutionTrigger } from "./EvolutionTrigger";

export interface IEvolutionChain {
    id: number;
    baby_trigger_item: INamedApiResource<IItem>;
    chain: IChainLink;
}

export interface IChainLink {
    is_baby: boolean;
    species: INamedApiResource<IPokemonSpecies>;
    evolution_details: IEvolutionDetail[];
    evolves_to: IChainLink[];
}

export interface IEvolutionDetail {
    item: INamedApiResource<IItem>;
    trigger: INamedApiResource<IEvolutionTrigger>;
    gender: number;
    held_item: INamedApiResource<IItem>;
    move: INamedApiResource<IMove>;
    known_move_type: INamedApiResource<IType>;
    location: INamedApiResource<ILocation>;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: INamedApiResource<IPokemonSpecies>;
    party_type: INamedApiResource<IType>;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: INamedApiResource<IPokemonSpecies>;
    turn_upside_down: boolean;
}

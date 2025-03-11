import { Item } from "../Items/Item";
import { Location } from "../Locations/Location";
import { Move } from "../Moves/Move";
import { PokemonSpecies } from "../Pokemon/PokemonSpecies";
import { Type } from "../Pokemon/Type";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { EvolutionTrigger } from "./EvolutionTrigger";

export interface EvolutionChain {
    id: number;
    baby_trigger_item: NamedApiResource<Item>;
    chain: ChainLink;
}

export interface ChainLink {
    is_baby: boolean;
    species: NamedApiResource<PokemonSpecies>;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink[];
}

export interface EvolutionDetail {
    item: NamedApiResource<Item>;
    trigger: NamedApiResource<EvolutionTrigger>;
    gender: number;
    held_item: NamedApiResource<Item>;
    move: NamedApiResource<Move>;
    known_move_type: NamedApiResource<Type>;
    location: NamedApiResource<Location>;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: NamedApiResource<PokemonSpecies>;
    party_type: NamedApiResource<Type>;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: NamedApiResource<PokemonSpecies>;
    turn_upside_down: boolean;
}

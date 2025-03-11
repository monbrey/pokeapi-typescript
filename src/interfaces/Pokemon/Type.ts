import { Generation } from "../Games/Generation";
import { Move } from "../Moves/Move";
import { MoveDamageClass } from "../Moves/MoveDamageClass";
import { GenerationGameIndex, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Pokemon } from "./Pokemon";

export interface Type {
    id: number;
    name: string;
    damage_relations: TypeRelations;
    game_indices: GenerationGameIndex[];
    generation: NamedApiResource<Generation>;
    move_damage_class: NamedApiResource<MoveDamageClass>;
    names: Name[];
    pokemon: TypePokemon[];
    moves: NamedApiResource<Move>;
}

export interface TypePokemon {
    slot: number;
    pokemon: NamedApiResource<Pokemon>;
}

export interface TypeRelations {
    no_damage_to: Array<NamedApiResource<Type>>;
    half_damage_to: Array<NamedApiResource<Type>>;
    double_damage_to: Array<NamedApiResource<Type>>;
    no_damage_from: Array<NamedApiResource<Type>>;
    half_damage_from: Array<NamedApiResource<Type>>;
    double_damage_from: Array<NamedApiResource<Type>>;
}

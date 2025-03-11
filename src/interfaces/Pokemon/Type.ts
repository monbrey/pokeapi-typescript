import type { Generation } from "../Games/Generation";
import type { Move } from "../Moves/Move";
import type { MoveDamageClass } from "../Moves/MoveDamageClass";
import type { GenerationGameIndex, Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { Pokemon } from "./Pokemon";

export type Type = {
	damage_relations: TypeRelations;
	game_indices: GenerationGameIndex[];
	generation: NamedApiResource<Generation>;
	id: number;
	move_damage_class: NamedApiResource<MoveDamageClass>;
	moves: NamedApiResource<Move>;
	name: string;
	names: Name[];
	pokemon: TypePokemon[];
};

export type TypePokemon = {
	pokemon: NamedApiResource<Pokemon>;
	slot: number;
};

export type TypeRelations = {
	double_damage_from: NamedApiResource<Type>[];
	double_damage_to: NamedApiResource<Type>[];
	half_damage_from: NamedApiResource<Type>[];
	half_damage_to: NamedApiResource<Type>[];
	no_damage_from: NamedApiResource<Type>[];
	no_damage_to: NamedApiResource<Type>[];
};

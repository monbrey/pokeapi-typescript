import { IGeneration } from "../Games/Generation";
import { IMove } from "../Moves/Move";
import { IMoveDamageClass } from "../Moves/MoveDamageClass";
import { IGenerationGameIndex, IName, INamedApiResource } from "../Utility/CommonModels";
import { IPokemon } from "./Pokemon";

export interface IType {
    id: number;
    name: string;
    damage_relations: ITypeRelations;
    game_indices: IGenerationGameIndex[];
    generation: INamedApiResource<IGeneration>;
    move_damage_class: INamedApiResource<IMoveDamageClass>;
    names: IName[];
    pokemon: ITypePokemon[];
    moves: INamedApiResource<IMove>;
}

export interface ITypePokemon {
    slot: number;
    pokemon: INamedApiResource<IPokemon>;
}

export interface ITypeRelations {
    no_damage_to: INamedApiResource<IType>;
    half_damage_to: INamedApiResource<IType>;
    double_damage_to: INamedApiResource<IType>;
    no_damage_from: INamedApiResource<IType>;
    half_damage_from: INamedApiResource<IType>;
    double_damage_from: INamedApiResource<IType>;
}

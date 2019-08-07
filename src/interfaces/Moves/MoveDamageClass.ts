import { IDescription, IName, INamedApiResource } from "../Utility/CommonModels";
import { IMove } from "./Move";

export interface IMoveDamageClass {
    id: number;
    name: string;
    descriptions: IDescription[];
    moves: Array<INamedApiResource<IMove>>;
    names: IName[];
}

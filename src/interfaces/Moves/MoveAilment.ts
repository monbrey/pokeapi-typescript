import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IMove } from "./Move";

export interface IMoveAilment {
    id: number;
    name: string;
    moves: Array<INamedApiResource<IMove>>;
    names: IName[];
}

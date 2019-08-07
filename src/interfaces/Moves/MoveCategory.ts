import { IDescription, INamedApiResource } from "../Utility/CommonModels";
import { IMove } from "./Move";

export interface IMoveCategory {
    id: number;
    name: string;
    moves: Array<INamedApiResource<IMove>>;
    descriptions: IDescription[];
}

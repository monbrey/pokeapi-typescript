import { IDescription, IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IMove } from "./Move";

export interface IMoveTarget {
    id: number;
    name: string;
    descriptions: IDescription[];
    moves: Array<INamedApiResource<IMove>>;
    names: IName[];
}

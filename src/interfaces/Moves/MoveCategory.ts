import { IDescription } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IMove } from "./Move";

export interface IMoveCategory {
    id: number;
    name: string;
    moves: Array<INamedApiResource<IMove>>;
    descriptions: IDescription[];
}

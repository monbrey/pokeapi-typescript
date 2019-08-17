import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IMove } from "./Move";

export interface IMoveAilment {
    id: number;
    name: string;
    moves: Array<INamedApiResource<IMove>>;
    names: IName[];
}

import { Description, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Move } from "./Move";

export interface MoveTarget {
    id: number;
    name: string;
    descriptions: Description[];
    moves: ;
    names: Name[];
}

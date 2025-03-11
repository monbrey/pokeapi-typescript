import { Description } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Move } from "./Move";

export interface MoveCategory {
    id: number;
    name: string;
    moves: ;
    descriptions: Description[];
}

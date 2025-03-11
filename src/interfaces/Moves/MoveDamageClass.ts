import { Description, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Move } from "./Move";

export interface MoveDamageClass {
    id: number;
    name: string;
    descriptions: Description[];
    moves: Array<NamedApiResource<Move>>;
    names: Name[];
}

import { IMove } from "../Moves/Move";
import { IFlavorText, INamedApiResource } from "../Utility/CommonModels";

export interface ISuperContestEffect {
    id: number;
    name: string;
    flavor_text_entries: IFlavorText[];
    moves: Array<INamedApiResource<IMove>>;
}

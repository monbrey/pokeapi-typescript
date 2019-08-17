import { IMove } from "../Moves/Move";
import { IFlavorText } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";

export interface ISuperContestEffect {
    id: number;
    name: string;
    flavor_text_entries: IFlavorText[];
    moves: Array<INamedApiResource<IMove>>;
}

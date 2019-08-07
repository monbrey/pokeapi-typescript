import { IGenerationGameIndex, IName, INamedApiResource } from "../Utility/CommonModels";
import { ILocationArea } from "./LocationArea";
import { IRegion } from "./Region";

export interface ILocation {
    id: number;
    name: string;
    region: INamedApiResource<IRegion>;
    names: IName[];
    game_indices: IGenerationGameIndex[];
    areas: Array<INamedApiResource<ILocationArea>>;
}

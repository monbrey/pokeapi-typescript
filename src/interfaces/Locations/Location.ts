import { IGenerationGameIndex, IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
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

import { GenerationGameIndex, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { LocationArea } from "./LocationArea";
import { Region } from "./Region";

export interface Location {
    id: number;
    name: string;
    region: NamedApiResource<Region>;
    names: Name[];
    game_indices: GenerationGameIndex[];
    areas: ;
}

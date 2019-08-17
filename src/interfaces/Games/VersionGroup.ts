import { IRegion } from "../Locations/Region";
import { IMoveLearnMethod } from "../Moves/MoveLearnMethod";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IGeneration } from "./Generation";
import { IPokedex } from "./Pokedex";
import { IVersion } from "./Version";

export interface IVersionGroup {
    id: number;
    name: string;
    order: number;
    generation: INamedApiResource<IGeneration>;
    move_learn_methods: Array<INamedApiResource<IMoveLearnMethod>>;
    pokedexes: Array<INamedApiResource<IPokedex>>;
    regions: Array<INamedApiResource<IRegion>>;
    versions: Array<INamedApiResource<IVersion>>;
}

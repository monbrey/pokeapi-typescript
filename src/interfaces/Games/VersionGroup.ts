import { Region } from "../Locations/Region";
import { MoveLearnMethod } from "../Moves/MoveLearnMethod";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Generation } from "./Generation";
import { Pokedex } from "./Pokedex";
import { Version } from "./Version";

export interface VersionGroup {
    id: number;
    name: string;
    order: number;
    generation: NamedApiResource<Generation>;
    move_learn_methods: ;
    pokedexes: ;
    regions: ;
    versions: ;
}

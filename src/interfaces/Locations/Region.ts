import { IGeneration } from "../Games/Generation";
import { IPokedex } from "../Games/Pokedex";
import { IVersionGroup } from "../Games/VersionGroup";
import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { ILocation } from "./Location";

export interface IRegion {
    id: number;
    locations: Array<INamedApiResource<ILocation>>;
    name: string;
    names: IName[];
    main_generation: INamedApiResource<IGeneration>;
    pokedexes: Array<INamedApiResource<IPokedex>>;
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

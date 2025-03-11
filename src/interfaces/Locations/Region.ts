import { Generation } from "../Games/Generation";
import { Pokedex } from "../Games/Pokedex";
import { VersionGroup } from "../Games/VersionGroup";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Location } from "./Location";

export interface Region {
    id: number;
    locations: Array<NamedApiResource<Location>>;
    name: string;
    names: Name[];
    main_generation: NamedApiResource<Generation>;
    pokedexes: Array<NamedApiResource<Pokedex>>;
    version_groups: Array<NamedApiResource<VersionGroup>>;
}

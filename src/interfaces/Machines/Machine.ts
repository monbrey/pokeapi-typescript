import { VersionGroup } from "../Games/VersionGroup";
import { Item } from "../Items/Item";
import { Move } from "../Moves/Move";
import { NamedApiResource } from "../Utility/NamedApiResourceList";

export interface Machine {
    id: number;
    item: NamedApiResource<Item>;
    move: NamedApiResource<Move>;
    version_group: NamedApiResource<VersionGroup>;
}

import { IVersionGroup } from "../Games/VersionGroup";
import { IItem } from "../Items/Item";
import { IMove } from "../Moves/Move";
import { INamedApiResource } from "../Utility/NamedApiResourceList";

export interface IMachine {
    id: number;
    item: INamedApiResource<IItem>;
    move: INamedApiResource<IMove>;
    version_group: INamedApiResource<IVersionGroup>;
}

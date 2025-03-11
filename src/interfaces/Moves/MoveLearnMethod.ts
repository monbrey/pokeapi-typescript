import { VersionGroup } from "../Games/VersionGroup";
import { Description, Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";

export interface MoveLearnMethod {
    id: number;
    name: string;
    descriptions: Description[];
    names: Name[];
    version_groups: ;
}

import { IVersionGroup } from "../Games/VersionGroup";
import { IDescription, IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";

export interface IMoveLearnMethod {
    id: number;
    name: string;
    descriptions: IDescription[];
    names: IName[];
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

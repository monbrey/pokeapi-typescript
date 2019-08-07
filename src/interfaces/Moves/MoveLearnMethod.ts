import { IVersionGroup } from "../Games/VersionGroup";
import { IDescription, IName, INamedApiResource } from "../Utility/CommonModels";

export interface IMoveLearnMethod {
    id: number;
    name: string;
    descriptions: IDescription[];
    names: IName[];
    version_groups: Array<INamedApiResource<IVersionGroup>>;
}

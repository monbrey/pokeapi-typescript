import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IVersionGroup } from "./VersionGroup";

export interface IVersion {
    id: number;
    name: string;
    names: IName[];
    version_group: INamedApiResource<IVersionGroup>;
}

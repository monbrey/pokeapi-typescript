import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { VersionGroup } from "./VersionGroup";

export interface Version {
    id: number;
    name: string;
    names: Name[];
    version_group: NamedApiResource<VersionGroup>;
}

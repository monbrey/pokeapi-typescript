import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { VersionGroup } from "./VersionGroup";

export type Version = {
	id: number;
	name: string;
	names: Name[];
	version_group: NamedApiResource<VersionGroup>;
};

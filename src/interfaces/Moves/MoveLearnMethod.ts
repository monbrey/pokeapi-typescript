import type { VersionGroup } from "../Games/VersionGroup";
import type { Description, Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";

export type MoveLearnMethod = {
	descriptions: Description[];
	id: number;
	name: string;
	names: Name[];
	version_groups: NamedApiResource<VersionGroup>[];
};

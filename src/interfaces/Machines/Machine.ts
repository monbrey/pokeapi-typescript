import type { VersionGroup } from "../Games/VersionGroup";
import type { Item } from "../Items/Item";
import type { Move } from "../Moves/Move";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";

export type Machine = {
	id: number;
	item: NamedApiResource<Item>;
	move: NamedApiResource<Move>;
	version_group: NamedApiResource<VersionGroup>;
};

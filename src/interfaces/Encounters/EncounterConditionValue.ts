import type { Name } from "../Utility/CommonModels";
import type { NamedApiResource } from "../Utility/NamedApiResourceList";
import type { EncounterCondition } from "./EncounterCondition";

export type EncounterConditionValue = {
	condition: NamedApiResource<EncounterCondition>;
	id: number;
	name: string;
	names: Name[];
};

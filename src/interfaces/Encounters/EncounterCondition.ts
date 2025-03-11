import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { EncounterConditionValue } from "./EncounterConditionValue";

export interface EncounterCondition {
    id: number;
    name: string;
    names: Name[];
    values: ;
}

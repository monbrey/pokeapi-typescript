import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { EncounterCondition } from "./EncounterCondition";

export interface EncounterConditionValue {
    id: number;
    name: string;
    condition: ;
    names: Name[];
}

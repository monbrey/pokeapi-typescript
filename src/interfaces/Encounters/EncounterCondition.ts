import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IEncounterConditionValue } from "./EncounterConditionValue";

export interface IEncounterCondition {
    id: number;
    name: string;
    names: IName[];
    values: Array<INamedApiResource<IEncounterConditionValue>>;
}

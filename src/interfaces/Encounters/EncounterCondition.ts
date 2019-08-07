import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IEncounterConditionValue } from "./EncounterConditionValue";

export interface IEncounterCondition {
    id: number;
    name: string;
    names: IName[];
    values: Array<INamedApiResource<IEncounterConditionValue>>;
}

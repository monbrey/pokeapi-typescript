import { IName, INamedApiResource } from "../Utility/CommonModels";
import { IEncounterCondition } from "./EncounterCondition";

export interface IEncounterConditionValue {
    id: number;
    name: string;
    condition: Array<INamedApiResource<IEncounterCondition>>;
    names: IName[];
}

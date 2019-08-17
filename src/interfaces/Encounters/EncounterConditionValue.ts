import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IEncounterCondition } from "./EncounterCondition";

export interface IEncounterConditionValue {
    id: number;
    name: string;
    condition: Array<INamedApiResource<IEncounterCondition>>;
    names: IName[];
}

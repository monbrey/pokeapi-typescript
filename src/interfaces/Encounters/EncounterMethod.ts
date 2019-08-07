import { IName } from "../Utility/CommonModels";

export interface IEncounterMethod {
    id: number;
    name: string;
    order: number;
    names: IName[];
}

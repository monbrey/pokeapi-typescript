import { Name } from "../Utility/CommonModels";

export interface EncounterMethod {
    id: number;
    name: string;
    order: number;
    names: Name[];
}

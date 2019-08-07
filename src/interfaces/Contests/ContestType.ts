import { IBerryFlavor } from "../Berries/BerryFlavor";
import { INamedApiResource } from "../Utility/CommonModels";
import { ILanguage } from "../Utility/Language";

export interface IContestType {
    id: number;
    name: string;
    berry_flavor: INamedApiResource<IBerryFlavor>;
    names: IContestName[];
}

export interface IContestName {
    name: string;
    color: string;
    language: INamedApiResource<ILanguage>;
}

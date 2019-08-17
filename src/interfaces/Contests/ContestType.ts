import { IBerryFlavor } from "../Berries/BerryFlavor";
import { ILanguage } from "../Utility/Language";
import { INamedApiResource } from "../Utility/NamedApiResourceList";

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

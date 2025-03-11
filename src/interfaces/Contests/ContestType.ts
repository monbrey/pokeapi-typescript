import { BerryFlavor } from "../Berries/BerryFlavor";
import { Language } from "../Utility/Language";
import { NamedApiResource } from "../Utility/NamedApiResourceList";

export interface ContestType {
    id: number;
    name: string;
    berry_flavor: NamedApiResource<BerryFlavor>;
    names: ContestName[];
}

export interface ContestName {
    name: string;
    color: string;
    language: NamedApiResource<Language>;
}

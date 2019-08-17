import { IBerryFlavor } from "../Berries/BerryFlavor";
import { IMoveBattleStyle } from "../Moves/MoveBattleStyle";
import { IName } from "../Utility/CommonModels";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IPokeathlonStat } from "./PokeathlonStat";
import { IStat } from "./Stat";

export interface INature {
    id: number;
    name: string;
    decreased_stat: INamedApiResource<IStat>;
    increased_stat: INamedApiResource<IStat>;
    hates_flavor: INamedApiResource<IBerryFlavor>;
    likes_flavor: INamedApiResource<IBerryFlavor>;
    pokeathlon_stat_changes: INatureStatChange[];
    move_battle_style_preference: IMoveBattleStylePreference[];
    names: IName[];
}

export interface INatureStatChange {
    max_change: number;
    pokeathlon_stat: INamedApiResource<IPokeathlonStat>;
}

export interface IMoveBattleStylePreference {
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: INamedApiResource<IMoveBattleStyle>;
}

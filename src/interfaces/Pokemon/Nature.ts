import { BerryFlavor } from "../Berries/BerryFlavor";
import { MoveBattleStyle } from "../Moves/MoveBattleStyle";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { PokeathlonStat } from "./PokeathlonStat";
import { Stat } from "./Stat";

export interface Nature {
    id: number;
    name: string;
    decreased_stat: NamedApiResource<Stat>;
    increased_stat: NamedApiResource<Stat>;
    hates_flavor: NamedApiResource<BerryFlavor>;
    likes_flavor: NamedApiResource<BerryFlavor>;
    pokeathlon_stat_changes: NatureStatChange[];
    move_battle_style_preference: MoveBattleStylePreference[];
    names: Name[];
}

export interface NatureStatChange {
    max_change: number;
    pokeathlon_stat: NamedApiResource<PokeathlonStat>;
}

export interface MoveBattleStylePreference {
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: NamedApiResource<MoveBattleStyle>;
}

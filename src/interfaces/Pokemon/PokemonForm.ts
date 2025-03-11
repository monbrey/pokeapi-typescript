import { VersionGroup } from "../Games/VersionGroup";
import { Name } from "../Utility/CommonModels";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { Pokemon } from "./Pokemon";

export interface PokemonForm {
    id: number;
    name: string;
    order: number;
    form_order: number;
    is_default: boolean;
    is_battle_only: boolean;
    is_mega: boolean;
    form_name: string;
    pokemon: NamedApiResource<Pokemon>;
    sprites: PokemonFormSprites;
    version_group: NamedApiResource<VersionGroup>;
    names: Name[];
    form_names: Name[];
}

export interface PokemonFormSprites {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
}

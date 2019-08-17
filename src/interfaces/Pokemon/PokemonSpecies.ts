import { IEvolutionChain } from "../Evolution/EvolutionChain";
import { IGeneration } from "../Games/Generation";
import { IPokedex } from "../Games/Pokedex";
import { IPalParkArea } from "../Locations/PalParkArea";
import { IApiResource } from "../Utility/ApiResourceList";
import { IDescription, IFlavorText, IName } from "../Utility/CommonModels";
import { ILanguage } from "../Utility/Language";
import { INamedApiResource } from "../Utility/NamedApiResourceList";
import { IEggGroup } from "./EggGroup";
import { IGrowthRate } from "./GrowthRate";
import { IPokemon } from "./Pokemon";
import { IPokemonColor } from "./PokemonColor";
import { IPokemonHabitat } from "./PokemonHabitat";
import { IPokemonShape } from "./PokemonShape";

export interface IPokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: INamedApiResource<IGrowthRate>;
    pokedex_numbers: IPokemonSpeciesDexEntry[];
    egg_groups: Array<INamedApiResource<IEggGroup>>;
    color: INamedApiResource<IPokemonColor>;
    shape: INamedApiResource<IPokemonShape>;
    evolves_from_species: INamedApiResource<IPokemonSpecies>;
    evolution_chain: IApiResource<IEvolutionChain>;
    habitat: INamedApiResource<IPokemonHabitat>;
    generation: INamedApiResource<IGeneration>;
    names: IName[];
    pal_park_encounters: IPalParkEnounterArea[];
    flavor_text_entries: IFlavorText[];
    form_descriptions: IDescription[];
    genera: IGenus[];
    varieties: IPokemonSpeciesVariety[];
}

export interface IGenus {
    genus: string;
    language: INamedApiResource<ILanguage>;
}

export interface IPokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: INamedApiResource<IPokedex>;
}

export interface IPalParkEnounterArea {
    base_score: number;
    rate: number;
    area: INamedApiResource<IPalParkArea>;
}

export interface IPokemonSpeciesVariety {
    is_default: boolean;
    pokemon: INamedApiResource<IPokemon>;
}

import { EvolutionChain } from "../Evolution/EvolutionChain";
import { Generation } from "../Games/Generation";
import { Pokedex } from "../Games/Pokedex";
import { PalParkArea } from "../Locations/PalParkArea";
import { ApiResource } from "../Utility/ApiResourceList";
import { Description, FlavorText, Name } from "../Utility/CommonModels";
import { Language } from "../Utility/Language";
import { NamedApiResource } from "../Utility/NamedApiResourceList";
import { EggGroup } from "./EggGroup";
import { GrowthRate } from "./GrowthRate";
import { Pokemon } from "./Pokemon";
import { PokemonColor } from "./PokemonColor";
import { PokemonHabitat } from "./PokemonHabitat";
import { PokemonShape } from "./PokemonShape";

export interface PokemonSpecies {
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
    growth_rate: NamedApiResource<GrowthRate>;
    pokedex_numbers: PokemonSpeciesDexEntry[];
    egg_groups: ;
    color: NamedApiResource<PokemonColor>;
    shape: NamedApiResource<PokemonShape>;
    evolves_from_species: NamedApiResource<PokemonSpecies>;
    evolution_chain: ApiResource<EvolutionChain>;
    habitat: NamedApiResource<PokemonHabitat>;
    generation: NamedApiResource<Generation>;
    names: Name[];
    pal_park_encounters: PalParkEnounterArea[];
    flavor_text_entries: FlavorText[];
    form_descriptions: Description[];
    genera: Genus[];
    varieties: PokemonSpeciesVariety[];
}

export interface Genus {
    genus: string;
    language: NamedApiResource<Language>;
}

export interface PokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: NamedApiResource<Pokedex>;
}

export interface PalParkEnounterArea {
    base_score: number;
    rate: number;
    area: NamedApiResource<PalParkArea>;
}

export interface PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedApiResource<Pokemon>;
}

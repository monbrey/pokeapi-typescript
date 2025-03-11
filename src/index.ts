import type { Berry } from "./interfaces/Berries/Berry";
import type { BerryFirmness } from "./interfaces/Berries/BerryFirmness";
import type { BerryFlavor } from "./interfaces/Berries/BerryFlavor";
import type { ContestEffect } from "./interfaces/Contests/ContestEffect";
import type { ContestType } from "./interfaces/Contests/ContestType";
import type { SuperContestEffect } from "./interfaces/Contests/SuperContestEffect";
import type { EncounterCondition } from "./interfaces/Encounters/EncounterCondition";
import type { EncounterConditionValue } from "./interfaces/Encounters/EncounterConditionValue";
import type { EncounterMethod } from "./interfaces/Encounters/EncounterMethod";
import type { EvolutionChain } from "./interfaces/Evolution/EvolutionChain";
import type { EvolutionTrigger } from "./interfaces/Evolution/EvolutionTrigger";
import type { Generation } from "./interfaces/Games/Generation";
import type { Pokedex } from "./interfaces/Games/Pokedex";
import type { Version } from "./interfaces/Games/Version";
import type { VersionGroup } from "./interfaces/Games/VersionGroup";
import type { Item } from "./interfaces/Items/Item";
import type { ItemAttribute } from "./interfaces/Items/ItemAttribute";
import type { ItemCategory } from "./interfaces/Items/ItemCategory";
import type { ItemFlingEffect } from "./interfaces/Items/ItemFlingEffect";
import type { ItemPocket } from "./interfaces/Items/ItemPocket";
import type { Location } from "./interfaces/Locations/Location";
import type { LocationArea } from "./interfaces/Locations/LocationArea";
import type { PalParkArea } from "./interfaces/Locations/PalParkArea";
import type { Region } from "./interfaces/Locations/Region";
import type { Machine } from "./interfaces/Machines/Machine";
import type { Move } from "./interfaces/Moves/Move";
import type { MoveAilment } from "./interfaces/Moves/MoveAilment";
import type { MoveBattleStyle } from "./interfaces/Moves/MoveBattleStyle";
import type { MoveCategory } from "./interfaces/Moves/MoveCategory";
import type { MoveDamageClass } from "./interfaces/Moves/MoveDamageClass";
import type { MoveLearnMethod } from "./interfaces/Moves/MoveLearnMethod";
import type { MoveTarget } from "./interfaces/Moves/MoveTarget";
import type { Ability } from "./interfaces/Pokemon/Ability";
import type { Characteristic } from "./interfaces/Pokemon/Characteristic";
import type { EggGroup } from "./interfaces/Pokemon/EggGroup";
import type { Gender } from "./interfaces/Pokemon/Gender";
import type { GrowthRate } from "./interfaces/Pokemon/GrowthRate";
import type { Nature } from "./interfaces/Pokemon/Nature";
import type { PokeathlonStat } from "./interfaces/Pokemon/PokeathlonStat";
import type { Pokemon } from "./interfaces/Pokemon/Pokemon";
import type { PokemonColor } from "./interfaces/Pokemon/PokemonColor";
import type { PokemonForm } from "./interfaces/Pokemon/PokemonForm";
import type { PokemonHabitat } from "./interfaces/Pokemon/PokemonHabitat";
import type { PokemonShape } from "./interfaces/Pokemon/PokemonShape";
import type { PokemonSpecies } from "./interfaces/Pokemon/PokemonSpecies";
import type { Stat } from "./interfaces/Pokemon/Stat";
import type { Type } from "./interfaces/Pokemon/Type";
import type { ApiResource } from "./interfaces/Utility/ApiResourceList";
import type { Language } from "./interfaces/Utility/Language";
import { Endpoint } from "./lib/Endpoint";
import { NamedEndpoint } from "./lib/NamedEndpoint";

export type * from "./interfaces/Berries/Berry";
export type * from "./interfaces/Berries/BerryFirmness";
export type * from "./interfaces/Berries/BerryFlavor";
export type * from "./interfaces/Contests/ContestEffect";
export type * from "./interfaces/Contests/ContestType";
export type * from "./interfaces/Contests/SuperContestEffect";
export type * from "./interfaces/Encounters/EncounterCondition";
export type * from "./interfaces/Encounters/EncounterConditionValue";
export type * from "./interfaces/Encounters/EncounterMethod";
export type * from "./interfaces/Evolution/EvolutionChain";
export type * from "./interfaces/Evolution/EvolutionTrigger";
export type * from "./interfaces/Games/Generation";
export type * from "./interfaces/Games/Pokedex";
export type * from "./interfaces/Games/Version";
export type * from "./interfaces/Games/VersionGroup";
export type * from "./interfaces/Items/Item";
export type * from "./interfaces/Items/ItemAttribute";
export type * from "./interfaces/Items/ItemCategory";
export type * from "./interfaces/Items/ItemFlingEffect";
export type * from "./interfaces/Items/ItemPocket";
export type * from "./interfaces/Locations/Location";
export type * from "./interfaces/Locations/LocationArea";
export type * from "./interfaces/Locations/PalParkArea";
export type * from "./interfaces/Locations/Region";
export type * from "./interfaces/Machines/Machine";
export type * from "./interfaces/Moves/Move";
export type * from "./interfaces/Moves/MoveAilment";
export type * from "./interfaces/Moves/MoveBattleStyle";
export type * from "./interfaces/Moves/MoveCategory";
export type * from "./interfaces/Moves/MoveDamageClass";
export type * from "./interfaces/Moves/MoveLearnMethod";
export type * from "./interfaces/Moves/MoveTarget";
export type * from "./interfaces/Pokemon/Ability";
export type * from "./interfaces/Pokemon/Characteristic";
export type * from "./interfaces/Pokemon/EggGroup";
export type * from "./interfaces/Pokemon/Gender";
export type * from "./interfaces/Pokemon/GrowthRate";
export type * from "./interfaces/Pokemon/Nature";
export type * from "./interfaces/Pokemon/PokeathlonStat";
export type * from "./interfaces/Pokemon/Pokemon";
export type * from "./interfaces/Pokemon/PokemonColor";
export type * from "./interfaces/Pokemon/PokemonForm";
export type * from "./interfaces/Pokemon/PokemonHabitat";
export type * from "./interfaces/Pokemon/PokemonShape";
export type * from "./interfaces/Pokemon/PokemonSpecies";
export type * from "./interfaces/Pokemon/Stat";
export type * from "./interfaces/Pokemon/Type";
export type * from "./interfaces/Utility/Language";
export type * from "./interfaces/Utility/CommonModels";
export type * from "./interfaces/Utility/ApiResourceList";
export type * from "./interfaces/Utility/NamedApiResourceList";

export class PokeAPI {
	public static Berry = new NamedEndpoint<Berry>("berry");

	public static BerryFirmness = new NamedEndpoint<BerryFirmness>("berry-firmness");

	public static BerryFlavor = new NamedEndpoint<BerryFlavor>("berry-flavor");

	public static ContestType = new NamedEndpoint<ContestType>("contest-type");

	public static ContestEffect = new Endpoint<ContestEffect>("contest-effect");

	public static SuperContestEffect = new Endpoint<SuperContestEffect>("super-contest-effect");

	public static EncounterMethod = new NamedEndpoint<EncounterMethod>("encounter-method");

	public static EncounterCondition = new NamedEndpoint<EncounterCondition>("encounter-condition");

	public static EncounterConditionValue = new NamedEndpoint<EncounterConditionValue>("encounter-condition-value");

	public static EvolutionChain = new Endpoint<EvolutionChain>("evolution-chain");

	public static EvolutionTrigger = new NamedEndpoint<EvolutionTrigger>("evolution-trigger");

	public static Generation = new NamedEndpoint<Generation>("generation");

	public static Pokedex = new NamedEndpoint<Pokedex>("pokedex");

	public static Version = new NamedEndpoint<Version>("version");

	public static VerionGroup = new NamedEndpoint<VersionGroup>("version-group");

	public static Item = new NamedEndpoint<Item>("item");

	public static ItemAttribute = new NamedEndpoint<ItemAttribute>("item-attribute");

	public static ItemCategory = new NamedEndpoint<ItemCategory>("item-category");

	public static ItemFlingEffect = new NamedEndpoint<ItemFlingEffect>("item-fling-effect");

	public static ItemPocket = new NamedEndpoint<ItemPocket>("item-pocket");

	public static Location = new NamedEndpoint<Location>("location");

	public static LocationArea = new NamedEndpoint<LocationArea>("location-area");

	public static PalParkArea = new NamedEndpoint<PalParkArea>("pal-park-area");

	public static Region = new NamedEndpoint<Region>("region");

	public static Machine = new Endpoint<Machine>("machine");

	public static Move = new NamedEndpoint<Move>("move");

	public static MoveAilment = new NamedEndpoint<MoveAilment>("move-ailment");

	public static MoveBattleStyle = new NamedEndpoint<MoveBattleStyle>("move-battle-style");

	public static MoveCategory = new NamedEndpoint<MoveCategory>("move-category");

	public static MoveDamageClass = new NamedEndpoint<MoveDamageClass>("move-damage-class");

	public static MoveLearnMethod = new NamedEndpoint<MoveLearnMethod>("move-learn-method");

	public static MoveTarget = new NamedEndpoint<MoveTarget>("move-target");

	public static Ability = new NamedEndpoint<Ability>("ability");

	public static Characteristic = new Endpoint<Characteristic>("characteristic");

	public static EggGroup = new NamedEndpoint<EggGroup>("egg-group");

	public static Gender = new NamedEndpoint<Gender>("gender");

	public static GrowthRate = new NamedEndpoint<GrowthRate>("growth-rate");

	public static Nature = new NamedEndpoint<Nature>("nature");

	public static PokeathlonStat = new NamedEndpoint<PokeathlonStat>("pokeathlon-stat");

	public static Pokemon = new NamedEndpoint<Pokemon>("pokemon");

	public static PokemonColor = new NamedEndpoint<PokemonColor>("pokemon-color");

	public static PokemonForm = new NamedEndpoint<PokemonForm>("pokemon-form");

	public static PokemonHabitat = new NamedEndpoint<PokemonHabitat>("pokemon-habitat");

	public static PokemonShape = new NamedEndpoint<PokemonShape>("pokemon-shape");

	public static PokemonSpecies = new NamedEndpoint<PokemonSpecies>("pokemon-species");

	public static Stat = new NamedEndpoint<Stat>("stat");

	public static Type = new NamedEndpoint<Type>("type");

	public static Language = new NamedEndpoint<Language>("language");
}

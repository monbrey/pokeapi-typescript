import Endpoint from "./classes/Endpoint";
import NamedEndpoint from "./classes/NamedEndpoint";
import { IBerry } from "./interfaces/Berries/Berry";
import { IBerryFirmness } from "./interfaces/Berries/BerryFirmness";
import { IBerryFlavor } from "./interfaces/Berries/BerryFlavor";
import { IContestEffect } from "./interfaces/Contests/ContestEffect";
import { IContestType } from "./interfaces/Contests/ContestType";
import { ISuperContestEffect } from "./interfaces/Contests/SuperContestEffect";
import { IEncounterCondition } from "./interfaces/Encounters/EncounterCondition";
import { IEncounterConditionValue } from "./interfaces/Encounters/EncounterConditionValue";
import { IEncounterMethod } from "./interfaces/Encounters/EncounterMethod";
import { IEvolutionChain } from "./interfaces/Evolution/EvolutionChain";
import { IEvolutionTrigger } from "./interfaces/Evolution/EvolutionTrigger";
import { IGeneration } from "./interfaces/Games/Generation";
import { IPokedex } from "./interfaces/Games/Pokedex";
import { IVersion } from "./interfaces/Games/Version";
import { IVersionGroup } from "./interfaces/Games/VersionGroup";
import { IItem } from "./interfaces/Items/Item";
import { IItemAttribute } from "./interfaces/Items/ItemAttribute";
import { IItemCategory } from "./interfaces/Items/ItemCategory";
import { IItemFlingEffect } from "./interfaces/Items/ItemFlingEffect";
import { IItemPocket } from "./interfaces/Items/ItemPocket";
import { ILocation } from "./interfaces/Locations/Location";
import { ILocationArea } from "./interfaces/Locations/LocationArea";
import { IPalParkArea } from "./interfaces/Locations/PalParkArea";
import { IRegion } from "./interfaces/Locations/Region";
import { IMachine } from "./interfaces/Machines/Machine";
import { IMove } from "./interfaces/Moves/Move";
import { IMoveAilment } from "./interfaces/Moves/MoveAilment";
import { IMoveBattleStyle } from "./interfaces/Moves/MoveBattleStyle";
import { IMoveCategory } from "./interfaces/Moves/MoveCategory";
import { IMoveDamageClass } from "./interfaces/Moves/MoveDamageClass";
import { IMoveLearnMethod } from "./interfaces/Moves/MoveLearnMethod";
import { IMoveTarget } from "./interfaces/Moves/MoveTarget";
import { IAbility } from "./interfaces/Pokemon/Ability";
import { ICharacteristic } from "./interfaces/Pokemon/Characteristic";
import { IEggGroup } from "./interfaces/Pokemon/EggGroup";
import { IGender } from "./interfaces/Pokemon/Gender";
import { IGrowthRate } from "./interfaces/Pokemon/GrowthRate";
import { INature } from "./interfaces/Pokemon/Nature";
import { IPokeathlonStat } from "./interfaces/Pokemon/PokeathlonStat";
import { IPokemon } from "./interfaces/Pokemon/Pokemon";
import { IPokemonColor } from "./interfaces/Pokemon/PokemonColor";
import { IPokemonForm } from "./interfaces/Pokemon/PokemonForm";
import { IPokemonHabitat } from "./interfaces/Pokemon/PokemonHabitat";
import { IPokemonShape } from "./interfaces/Pokemon/PokemonShape";
import { IPokemonSpecies } from "./interfaces/Pokemon/PokemonSpecies";
import { IStat } from "./interfaces/Pokemon/Stat";
import { IType } from "./interfaces/Pokemon/Type";
import { ILanguage } from "./interfaces/Utility/Language";

class PokeAPI {
    public Berry = new NamedEndpoint<IBerry>("berry");
    public BerryFirmness = new NamedEndpoint<IBerryFirmness>("berry-firmness");
    public BerryFlavor = new NamedEndpoint<IBerryFlavor>("berry-flavor");

    public ContestType = new NamedEndpoint<IContestType>("contest-type");
    public ContestEffect = new Endpoint<IContestEffect>("contest-effect");
    public SuperContestEffect = new Endpoint<ISuperContestEffect>("super-contest-effect");

    public EncounterMethod = new NamedEndpoint<IEncounterMethod>("encounter-method");
    public EncounterCondition = new NamedEndpoint<IEncounterCondition>("encounter-condition");
    public EncounterConditionValue = new NamedEndpoint<IEncounterConditionValue>("encounter-condition-value");

    public EvolutionChain = new Endpoint<IEvolutionChain>("evolution-chain");
    public EvolutionTrigger = new NamedEndpoint<IEvolutionTrigger>("evolution-trigger");

    public Generaition = new NamedEndpoint<IGeneration>("generation");
    public Pokedex = new NamedEndpoint<IPokedex>("pokedex");
    public Version = new NamedEndpoint<IVersion>("version");
    public VerionGroup = new NamedEndpoint<IVersionGroup>("version-group");

    public Item = new NamedEndpoint<IItem>("item");
    public ItemAttribute = new NamedEndpoint<IItemAttribute>("item-attribute");
    public ItemCategory = new NamedEndpoint<IItemCategory>("item-category");
    public ItemFlingEffect = new NamedEndpoint<IItemFlingEffect>("item-fling-effect");
    public ItemPocket = new NamedEndpoint<IItemPocket>("item-pocket");

    public Location = new NamedEndpoint<ILocation>("location");
    public LocationArea = new NamedEndpoint<ILocationArea>("location-area");
    public PalParkArea = new NamedEndpoint<IPalParkArea>("pal-park-area");
    public Region = new NamedEndpoint<IRegion>("region");

    public Machine = new Endpoint<IMachine>("machine");

    public Move = new NamedEndpoint<IMove>("move");
    public MoveAilment = new NamedEndpoint<IMoveAilment>("move-ailment");
    public MoveBattleStyle = new NamedEndpoint<IMoveBattleStyle>("move-battle-style");
    public MoveCategory = new NamedEndpoint<IMoveCategory>("move-category");
    public MoveDamageClass = new NamedEndpoint<IMoveDamageClass>("move-damage-class");
    public MoveLearnMethod = new NamedEndpoint<IMoveLearnMethod>("move-learn-method");
    public MoveTarget = new NamedEndpoint<IMoveTarget>("move-target");

    public Ability = new NamedEndpoint<IAbility>("ability");
    public Characteristic = new Endpoint<ICharacteristic>("characteristic");
    public EggGroup = new NamedEndpoint<IEggGroup>("egg-group");
    public Gender = new NamedEndpoint<IGender>("gender");
    public GrowthRate = new NamedEndpoint<IGrowthRate>("growth-rate");
    public Nature = new NamedEndpoint<INature>("nature");
    public PokeathlonStat = new NamedEndpoint<IPokeathlonStat>("pokeathlon-stat");
    public Pokemon = new NamedEndpoint<IPokemon>("pokemon");
    public PokemonColor = new NamedEndpoint<IPokemonColor>("pokemon-color");
    public PokemonForm = new NamedEndpoint<IPokemonForm>("pokemon-form");
    public PokemonHabitat = new NamedEndpoint<IPokemonHabitat>("pokemon-habitat");
    public PokemonShape = new NamedEndpoint<IPokemonShape>("pokemon-shape");
    public PokemonSpecies = new NamedEndpoint<IPokemonSpecies>("pokemon-species");
    public Stat = new NamedEndpoint<IStat>("stat");
    public Type = new NamedEndpoint<IType>("type");

    public Language = new NamedEndpoint<ILanguage>("language");

    constructor() { }
}

module.exports = PokeAPI;
module.exports.Endpoint = Endpoint;
module.exports.NamedEndpoint = NamedEndpoint;

export default PokeAPI;

export type Berry = IBerry;
export type BerryFirmness = IBerryFirmness;
export type BerryFlavor = IBerryFlavor;

export type ContestType = IContestType;
export type ContestEffect = IContestEffect;
export type SuperContestEffect = ISuperContestEffect;

export type EncounterMethod = IEncounterMethod;
export type EncounterCondition = IEncounterCondition;
export type EncounterConditionValue = IEncounterConditionValue;

export type EvolutionChain = IEvolutionChain;
export type EvolutionTrigger = IEvolutionTrigger;

export type Generaition = IGeneration;
export type Pokedex = IPokedex;
export type Version = IVersion;
export type VerionGroup = IVersionGroup;

export type Item = IItem;
export type ItemAttribute = IItemAttribute;
export type ItemCategory = IItemCategory;
export type ItemFlingEffect = IItemFlingEffect;
export type ItemPocket = IItemPocket;

export type Location = ILocation;
export type LocationArea = ILocationArea;
export type PalParkArea = IPalParkArea;
export type Region = IRegion;

export type Machine = IMachine;

export type Move = IMove;
export type MoveAilment = IMoveAilment;
export type MoveBattleStyle = IMoveBattleStyle;
export type MoveCategory = IMoveCategory;
export type MoveDamageClass = IMoveDamageClass;
export type MoveLearnMethod = IMoveLearnMethod;
export type MoveTarget = IMoveTarget;

export type Ability = IAbility;
export type Characteristic = ICharacteristic;
export type EggGroup = IEggGroup;
export type Gender = IGender;
export type GrowthRate = IGrowthRate;
export type Nature = INature;
export type PokeathlonStat = IPokeathlonStat;
export type Pokemon = IPokemon;
export type PokemonColor = IPokemonColor;
export type PokemonForm = IPokemonForm;
export type PokemonHabitat = IPokemonHabitat;
export type PokemonShape = IPokemonShape;
export type PokemonSpecies = IPokemonSpecies;
export type Stat = IStat;
export type Type = IType;

export type Language = ILanguage;

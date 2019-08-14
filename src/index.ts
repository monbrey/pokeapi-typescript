import Endpoint from "./classes/Endpoint";
import NamedEndpoint from "./classes/NamedEndpoint";
import * as BerryTypes from "./interfaces/Berries/Berry";
import * as BerryFirmnessTypes from "./interfaces/Berries/BerryFirmness";
import * as BerryFlavorTypes from "./interfaces/Berries/BerryFlavor";
import * as ContestEffectTypes from "./interfaces/Contests/ContestEffect";
import * as ContestTypeTypes from "./interfaces/Contests/ContestType";
import * as SuperContestEffectTypes from "./interfaces/Contests/SuperContestEffect";
import * as EncounterConditionTypes from "./interfaces/Encounters/EncounterCondition";
import * as EncounterConditionValueTypes from "./interfaces/Encounters/EncounterConditionValue";
import * as EncounterMethodTypes from "./interfaces/Encounters/EncounterMethod";
import * as EvolutionChainTypes from "./interfaces/Evolution/EvolutionChain";
import * as EvolutionTriggerTypes from "./interfaces/Evolution/EvolutionTrigger";
import * as GenerationTypes from "./interfaces/Games/Generation";
import * as PokedexTypes from "./interfaces/Games/Pokedex";
import * as VersionTypes from "./interfaces/Games/Version";
import * as VersionGroupTypes from "./interfaces/Games/VersionGroup";
import * as ItemTypes from "./interfaces/Items/Item";
import * as ItemAttributeTypes from "./interfaces/Items/ItemAttribute";
import * as ItemCategoryTypes from "./interfaces/Items/ItemCategory";
import * as ItemFlingEffectTypes from "./interfaces/Items/ItemFlingEffect";
import * as ItemPocketTypes from "./interfaces/Items/ItemPocket";
import * as LocationTypes from "./interfaces/Locations/Location";
import * as LocationAreaTypes from "./interfaces/Locations/LocationArea";
import * as PalParkAreaTypes from "./interfaces/Locations/PalParkArea";
import * as RegionTypes from "./interfaces/Locations/Region";
import * as MachineTypes from "./interfaces/Machines/Machine";
import * as MoveTypes from "./interfaces/Moves/Move";
import * as MoveAilmentTypes from "./interfaces/Moves/MoveAilment";
import * as MoveBattleStyleTypes from "./interfaces/Moves/MoveBattleStyle";
import * as MoveCategoryTypes from "./interfaces/Moves/MoveCategory";
import * as MoveDamageClassTypes from "./interfaces/Moves/MoveDamageClass";
import * as MoveLearnMethodTypes from "./interfaces/Moves/MoveLearnMethod";
import * as MoveTargetTypes from "./interfaces/Moves/MoveTarget";
import * as AbilityTypes from "./interfaces/Pokemon/Ability";
import * as CharacteristicTypes from "./interfaces/Pokemon/Characteristic";
import * as EggGroupTypes from "./interfaces/Pokemon/EggGroup";
import * as GenderTypes from "./interfaces/Pokemon/Gender";
import * as GrowthRateTypes from "./interfaces/Pokemon/GrowthRate";
import * as NatureTypes from "./interfaces/Pokemon/Nature";
import * as PokeathlonStatTypes from "./interfaces/Pokemon/PokeathlonStat";
import * as PokemonTypes from "./interfaces/Pokemon/Pokemon";
import * as PokemonColorTypes from "./interfaces/Pokemon/PokemonColor";
import * as PokemonFormTypes from "./interfaces/Pokemon/PokemonForm";
import * as PokemonHabitatTypes from "./interfaces/Pokemon/PokemonHabitat";
import * as PokemonShapeTypes from "./interfaces/Pokemon/PokemonShape";
import * as PokemonSpeciesTypes from "./interfaces/Pokemon/PokemonSpecies";
import * as StatTypes from "./interfaces/Pokemon/Stat";
import * as TypeTypes from "./interfaces/Pokemon/Type";
import * as LanguageTypes from "./interfaces/Utility/Language";

class PokeAPI {
    public Berry = new NamedEndpoint<BerryTypes.IBerry>("berry");
    public BerryFirmness = new NamedEndpoint<BerryFirmnessTypes.IBerryFirmness>("berry-firmness");
    public BerryFlavor = new NamedEndpoint<BerryFlavorTypes.IBerryFlavor>("berry-flavor");

    public ContestType = new NamedEndpoint<ContestTypeTypes.IContestType>("contest-type");
    public ContestEffect = new Endpoint<ContestEffectTypes.IContestEffect>("contest-effect");
    public SuperContestEffect = new Endpoint<SuperContestEffectTypes.ISuperContestEffect>("super-contest-effect");

    public EncounterMethod = new NamedEndpoint<EncounterMethodTypes.IEncounterMethod>("encounter-method");
    public EncounterCondition = new NamedEndpoint<EncounterConditionTypes.IEncounterCondition>("encounter-condition");
    public EncounterConditionValue = new NamedEndpoint<EncounterConditionValueTypes.IEncounterConditionValue>("encounter-condition-value");

    public EvolutionChain = new Endpoint<EvolutionChainTypes.IEvolutionChain>("evolution-chain");
    public EvolutionTrigger = new NamedEndpoint<EvolutionTriggerTypes.IEvolutionTrigger>("evolution-trigger");

    public Generaition = new NamedEndpoint<GenerationTypes.IGeneration>("generation");
    public Pokedex = new NamedEndpoint<PokedexTypes.IPokedex>("pokedex");
    public Version = new NamedEndpoint<VersionTypes.IVersion>("version");
    public VerionGroup = new NamedEndpoint<VersionGroupTypes.IVersionGroup>("version-group");

    public Item = new NamedEndpoint<ItemTypes.IItem>("item");
    public ItemAttribute = new NamedEndpoint<ItemAttributeTypes.IItemAttribute>("item-attribute");
    public ItemCategory = new NamedEndpoint<ItemCategoryTypes.IItemCategory>("item-category");
    public ItemFlingEffect = new NamedEndpoint<ItemFlingEffectTypes.IItemFlingEffect>("item-fling-effect");
    public ItemPocket = new NamedEndpoint<ItemPocketTypes.IItemPocket>("item-pocket");

    public Location = new NamedEndpoint<LocationTypes.ILocation>("location");
    public LocationArea = new NamedEndpoint<LocationAreaTypes.ILocationArea>("location-area");
    public PalParkArea = new NamedEndpoint<PalParkAreaTypes.IPalParkArea>("pal-park-area");
    public Region = new NamedEndpoint<RegionTypes.IRegion>("region");

    public Machine = new Endpoint<MachineTypes.IMachine>("machine");

    public Move = new NamedEndpoint<MoveTypes.IMove>("move");
    public MoveAilment = new NamedEndpoint<MoveAilmentTypes.IMoveAilment>("move-ailment");
    public MoveBattleStyle = new NamedEndpoint<MoveBattleStyleTypes.IMoveBattleStyle>("move-battle-style");
    public MoveCategory = new NamedEndpoint<MoveCategoryTypes.IMoveCategory>("move-category");
    public MoveDamageClass = new NamedEndpoint<MoveDamageClassTypes.IMoveDamageClass>("move-damage-class");
    public MoveLearnMethod = new NamedEndpoint<MoveLearnMethodTypes.IMoveLearnMethod>("move-learn-method");
    public MoveTarget = new NamedEndpoint<MoveTargetTypes.IMoveTarget>("move-target");

    public Ability = new NamedEndpoint<AbilityTypes.IAbility>("ability");
    public Characteristic = new Endpoint<CharacteristicTypes.ICharacteristic>("characteristic");
    public EggGroup = new NamedEndpoint<EggGroupTypes.IEggGroup>("egg-group");
    public Gender = new NamedEndpoint<GenderTypes.IGender>("gender");
    public GrowthRate = new NamedEndpoint<GrowthRateTypes.IGrowthRate>("growth-rate");
    public Nature = new NamedEndpoint<NatureTypes.INature>("nature");
    public PokeathlonStat = new NamedEndpoint<PokeathlonStatTypes.IPokeathlonStat>("pokeathlon-stat");
    public Pokemon = new NamedEndpoint<PokemonTypes.IPokemon>("pokemon");
    public PokemonColor = new NamedEndpoint<PokemonColorTypes.IPokemonColor>("pokemon-color");
    public PokemonForm = new NamedEndpoint<PokemonFormTypes.IPokemonForm>("pokemon-form");
    public PokemonHabitat = new NamedEndpoint<PokemonHabitatTypes.IPokemonHabitat>("pokemon-habitat");
    public PokemonShape = new NamedEndpoint<PokemonShapeTypes.IPokemonShape>("pokemon-shape");
    public PokemonSpecies = new NamedEndpoint<PokemonSpeciesTypes.IPokemonSpecies>("pokemon-species");
    public Stat = new NamedEndpoint<StatTypes.IStat>("stat");
    public Type = new NamedEndpoint<TypeTypes.IType>("type");

    public Language = new NamedEndpoint<LanguageTypes.ILanguage>("language");

    constructor() { }
}

module.exports = PokeAPI;
module.exports.Endpoint = Endpoint;
module.exports.NamedEndpoint = NamedEndpoint;

export default PokeAPI;

export type Berry = BerryTypes.IBerry;
export type BerryFirmness = BerryFirmnessTypes.IBerryFirmness;
export type BerryFlavor = BerryFlavorTypes.IBerryFlavor;

export type ContestType = ContestTypeTypes.IContestType;
export type ContestEffect = ContestEffectTypes.IContestEffect;
export type SuperContestEffect = SuperContestEffectTypes.ISuperContestEffect;

export type EncounterMethod = EncounterMethodTypes.IEncounterMethod;
export type EncounterCondition = EncounterConditionTypes.IEncounterCondition;
export type EncounterConditionValue = EncounterConditionValueTypes.IEncounterConditionValue;

export type EvolutionChain = EvolutionChainTypes.IEvolutionChain;
export type EvolutionTrigger = EvolutionTriggerTypes.IEvolutionTrigger;

export type Generaition = GenerationTypes.IGeneration;
export type Pokedex = PokedexTypes.IPokedex;
export type Version = VersionTypes.IVersion;
export type VerionGroup = VersionGroupTypes.IVersionGroup;

export type Item = ItemTypes.IItem;
export type ItemAttribute = ItemAttributeTypes.IItemAttribute;
export type ItemCategory = ItemCategoryTypes.IItemCategory;
export type ItemFlingEffect = ItemFlingEffectTypes.IItemFlingEffect;
export type ItemPocket = ItemPocketTypes.IItemPocket;

export type Location = LocationTypes.ILocation;
export type LocationArea = LocationAreaTypes.ILocationArea;
export type PalParkArea = PalParkAreaTypes.IPalParkArea;
export type Region = RegionTypes.IRegion;

export type Machine = MachineTypes.IMachine;

export type Move = MoveTypes.IMove;
export type MoveAilment = MoveAilmentTypes.IMoveAilment;
export type MoveBattleStyle = MoveBattleStyleTypes.IMoveBattleStyle;
export type MoveCategory = MoveCategoryTypes.IMoveCategory;
export type MoveDamageClass = MoveDamageClassTypes.IMoveDamageClass;
export type MoveLearnMethod = MoveLearnMethodTypes.IMoveLearnMethod;
export type MoveTarget = MoveTargetTypes.IMoveTarget;

export type Ability = AbilityTypes.IAbility;
export type Characteristic = CharacteristicTypes.ICharacteristic;
export type EggGroup = EggGroupTypes.IEggGroup;
export type Gender = GenderTypes.IGender;
export type GrowthRate = GrowthRateTypes.IGrowthRate;
export type Nature = NatureTypes.INature;
export type PokeathlonStat = PokeathlonStatTypes.IPokeathlonStat;
export type Pokemon = PokemonTypes.IPokemon;
export type PokemonColor = PokemonColorTypes.IPokemonColor;
export type PokemonForm = PokemonFormTypes.IPokemonForm;
export type PokemonHabitat = PokemonHabitatTypes.IPokemonHabitat;
export type PokemonShape = PokemonShapeTypes.IPokemonShape;
export type PokemonSpecies = PokemonSpeciesTypes.IPokemonSpecies;
export type Stat = StatTypes.IStat;
export type Type = TypeTypes.IType;

export type Language = LanguageTypes.ILanguage;

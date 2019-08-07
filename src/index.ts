import Endpoint from "./classes/Endpoint";
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

export default class PokeAPI {
    public Berry = new Endpoint<IBerry>("berry");
    public BerryFirmness = new Endpoint<IBerryFirmness>("berry-firmness");
    public BerryFlavor = new Endpoint<IBerryFlavor>("berry-flavor");

    public ContestEffect = new Endpoint<IContestEffect>("contest-effect");
    public ContestType = new Endpoint<IContestType>("contest-type");
    public SuperContestEffect = new Endpoint<ISuperContestEffect>("super-contest-effect");

    public EncounterCondition = new Endpoint<IEncounterCondition>("encounter-condition");
    public EncounterConditionValue = new Endpoint<IEncounterConditionValue>("encounter-condition-value");
    public EncounterMethod = new Endpoint<IEncounterMethod>("encounter-method");

    public EvolutionChain = new Endpoint<IEvolutionChain>("evolution-chain");
    public EvolutionTrigger = new Endpoint<IEvolutionTrigger>("evolution-trigger");

    public Generaition = new Endpoint<IGeneration>("generation");
    public Pokedex = new Endpoint<IPokedex>("pokedex");
    public Version = new Endpoint<IVersion>("version");
    public VerionGroup = new Endpoint<IVersionGroup>("version-group");

    public Item = new Endpoint<IItem>("item");
    public ItemAttribute = new Endpoint<IItemAttribute>("item-attribute");
    public ItemCategory = new Endpoint<IItemCategory>("item-category");
    public ItemFlingEffect = new Endpoint<IItemFlingEffect>("item-fling-effect");
    public ItemPocket = new Endpoint<IItemPocket>("item-pocket");

    public Location = new Endpoint<ILocation>("location");
    public LocationArea = new Endpoint<ILocationArea>("location-area");
    public PalParkArea = new Endpoint<IPalParkArea>("pal-park-area");
    public Region = new Endpoint<IRegion>("region");

    public Machine = new Endpoint<IMachine>("machine");

    public Move = new Endpoint<IMove>("move");
    public MoveAilment = new Endpoint<IMoveAilment>("move-ailment");
    public MoveBattleStyle = new Endpoint<IMoveBattleStyle>("move-battle-style");
    public MoveCategory = new Endpoint<IMoveCategory>("move-category");
    public MoveDamageClass = new Endpoint<IMoveDamageClass>("move-damage-class");
    public MoveLearnMethod = new Endpoint<IMoveLearnMethod>("move-learn-method");
    public MoveTarget = new Endpoint<IMoveTarget>("move-target");

    public Ability = new Endpoint<IAbility>("ability");
    public Characteristic = new Endpoint<ICharacteristic>("characteristic");
    public EggGroup = new Endpoint<IEggGroup>("egg-group");
    public Gender = new Endpoint<IGender>("gender");
    public GrowthRate = new Endpoint<IGrowthRate>("growth-rate");
    public Nature = new Endpoint<INature>("nature");
    public PokeathlonStat = new Endpoint<IPokeathlonStat>("pokeathlon-stat");
    public Pokemon = new Endpoint<IPokemon>("pokemon");
    public PokemonColor = new Endpoint<IPokemonColor>("pokemon-color");
    public PokemonForm = new Endpoint<IPokemonForm>("pokemon-form");
    public PokemonHabitat = new Endpoint<IPokemonHabitat>("pokemon-habitat");
    public PokemonShape = new Endpoint<IPokemonShape>("pokemon-shape");
    public PokemonSpecies = new Endpoint<IPokemonSpecies>("pokemon-species");
    public Stat = new Endpoint<IStat>("stat");
    public Type = new Endpoint<IType>("type");

    public Language = new Endpoint<ILanguage>("language");

    constructor() { }
}

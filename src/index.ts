import { Endpoint } from "./classes/Endpoint";
import { NamedEndpoint } from "./classes/NamedEndpoint";
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
import { IApiResource } from "./interfaces/Utility/ApiResourceList";
import { ILanguage } from "./interfaces/Utility/Language";

export * from "./interfaces/Berries/Berry";
export * from "./interfaces/Berries/BerryFirmness";
export * from "./interfaces/Berries/BerryFlavor";
export * from "./interfaces/Contests/ContestEffect";
export * from "./interfaces/Contests/ContestType";
export * from "./interfaces/Contests/SuperContestEffect";
export * from "./interfaces/Encounters/EncounterCondition";
export * from "./interfaces/Encounters/EncounterConditionValue";
export * from "./interfaces/Encounters/EncounterMethod";
export * from "./interfaces/Evolution/EvolutionChain";
export * from "./interfaces/Evolution/EvolutionTrigger";
export * from "./interfaces/Games/Generation";
export * from "./interfaces/Games/Pokedex";
export * from "./interfaces/Games/Version";
export * from "./interfaces/Games/VersionGroup";
export * from "./interfaces/Items/Item";
export * from "./interfaces/Items/ItemAttribute";
export * from "./interfaces/Items/ItemCategory";
export * from "./interfaces/Items/ItemFlingEffect";
export * from "./interfaces/Items/ItemPocket";
export * from "./interfaces/Locations/Location";
export * from "./interfaces/Locations/LocationArea";
export * from "./interfaces/Locations/PalParkArea";
export * from "./interfaces/Locations/Region";
export * from "./interfaces/Machines/Machine";
export * from "./interfaces/Moves/Move";
export * from "./interfaces/Moves/MoveAilment";
export * from "./interfaces/Moves/MoveBattleStyle";
export * from "./interfaces/Moves/MoveCategory";
export * from "./interfaces/Moves/MoveDamageClass";
export * from "./interfaces/Moves/MoveLearnMethod";
export * from "./interfaces/Moves/MoveTarget";
export * from "./interfaces/Pokemon/Ability";
export * from "./interfaces/Pokemon/Characteristic";
export * from "./interfaces/Pokemon/EggGroup";
export * from "./interfaces/Pokemon/Gender";
export * from "./interfaces/Pokemon/GrowthRate";
export * from "./interfaces/Pokemon/Nature";
export * from "./interfaces/Pokemon/PokeathlonStat";
export * from "./interfaces/Pokemon/Pokemon";
export * from "./interfaces/Pokemon/PokemonColor";
export * from "./interfaces/Pokemon/PokemonForm";
export * from "./interfaces/Pokemon/PokemonHabitat";
export * from "./interfaces/Pokemon/PokemonShape";
export * from "./interfaces/Pokemon/PokemonSpecies";
export * from "./interfaces/Pokemon/Stat";
export * from "./interfaces/Pokemon/Type";
export * from "./interfaces/Utility/Language";
export * from "./interfaces/Utility/CommonModels";
export * from "./interfaces/Utility/ApiResourceList";
export * from "./interfaces/Utility/NamedApiResourceList";

class PokeAPI {
    public static Berry = new NamedEndpoint<IBerry>("berry");
    public static BerryFirmness = new NamedEndpoint<IBerryFirmness>("berry-firmness");
    public static BerryFlavor = new NamedEndpoint<IBerryFlavor>("berry-flavor");

    public static ContestType = new NamedEndpoint<IContestType>("contest-type");
    public static ContestEffect = new Endpoint<IContestEffect>("contest-effect");
    public static SuperContestEffect = new Endpoint<ISuperContestEffect>("super-contest-effect");

    public static EncounterMethod = new NamedEndpoint<IEncounterMethod>("encounter-method");
    public static EncounterCondition = new NamedEndpoint<IEncounterCondition>("encounter-condition");
    public static EncounterConditionValue = new NamedEndpoint<IEncounterConditionValue>("encounter-condition-value");

    public static EvolutionChain = new Endpoint<IEvolutionChain>("evolution-chain");
    public static EvolutionTrigger = new NamedEndpoint<IEvolutionTrigger>("evolution-trigger");

    public static Generaition = new NamedEndpoint<IGeneration>("generation");
    public static Pokedex = new NamedEndpoint<IPokedex>("pokedex");
    public static Version = new NamedEndpoint<IVersion>("version");
    public static VerionGroup = new NamedEndpoint<IVersionGroup>("version-group");

    public static Item = new NamedEndpoint<IItem>("item");
    public static ItemAttribute = new NamedEndpoint<IItemAttribute>("item-attribute");
    public static ItemCategory = new NamedEndpoint<IItemCategory>("item-category");
    public static ItemFlingEffect = new NamedEndpoint<IItemFlingEffect>("item-fling-effect");
    public static ItemPocket = new NamedEndpoint<IItemPocket>("item-pocket");

    public static Location = new NamedEndpoint<ILocation>("location");
    public static LocationArea = new NamedEndpoint<ILocationArea>("location-area");
    public static PalParkArea = new NamedEndpoint<IPalParkArea>("pal-park-area");
    public static Region = new NamedEndpoint<IRegion>("region");

    public static Machine = new Endpoint<IMachine>("machine");

    public static Move = new NamedEndpoint<IMove>("move");
    public static MoveAilment = new NamedEndpoint<IMoveAilment>("move-ailment");
    public static MoveBattleStyle = new NamedEndpoint<IMoveBattleStyle>("move-battle-style");
    public static MoveCategory = new NamedEndpoint<IMoveCategory>("move-category");
    public static MoveDamageClass = new NamedEndpoint<IMoveDamageClass>("move-damage-class");
    public static MoveLearnMethod = new NamedEndpoint<IMoveLearnMethod>("move-learn-method");
    public static MoveTarget = new NamedEndpoint<IMoveTarget>("move-target");

    public static Ability = new NamedEndpoint<IAbility>("ability");
    public static Characteristic = new Endpoint<ICharacteristic>("characteristic");
    public static EggGroup = new NamedEndpoint<IEggGroup>("egg-group");
    public static Gender = new NamedEndpoint<IGender>("gender");
    public static GrowthRate = new NamedEndpoint<IGrowthRate>("growth-rate");
    public static Nature = new NamedEndpoint<INature>("nature");
    public static PokeathlonStat = new NamedEndpoint<IPokeathlonStat>("pokeathlon-stat");
    public static Pokemon = new NamedEndpoint<IPokemon>("pokemon");
    public static PokemonColor = new NamedEndpoint<IPokemonColor>("pokemon-color");
    public static PokemonForm = new NamedEndpoint<IPokemonForm>("pokemon-form");
    public static PokemonHabitat = new NamedEndpoint<IPokemonHabitat>("pokemon-habitat");
    public static PokemonShape = new NamedEndpoint<IPokemonShape>("pokemon-shape");
    public static PokemonSpecies = new NamedEndpoint<IPokemonSpecies>("pokemon-species");
    public static Stat = new NamedEndpoint<IStat>("stat");
    public static Type = new NamedEndpoint<IType>("type");

    public static Language = new NamedEndpoint<ILanguage>("language");

    public static async fromResource(apiResource: IApiResource<any>) {
        const [match, resource, id] = /([a-z-]+)\/(\d+)/.exec(apiResource.url);

        if (apiResource.endpoint) {
            return apiResource.endpoint.resolve(parseInt(id, 10));
        }

        const endpoint = Object.getOwnPropertyNames(this).find(prop => this[prop].resource === resource);
        return this[endpoint].resolve(parseInt(id, 10));
    }
}

module.exports = PokeAPI;
export default PokeAPI;

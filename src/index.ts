import { Endpoint } from "./lib/Endpoint";
import { NamedEndpoint } from "./lib/NamedEndpoint";
import { Berry } from "./interfaces/Berries/Berry";
import { BerryFirmness } from "./interfaces/Berries/BerryFirmness";
import { BerryFlavor } from "./interfaces/Berries/BerryFlavor";
import { ContestEffect } from "./interfaces/Contests/ContestEffect";
import { ContestType } from "./interfaces/Contests/ContestType";
import { SuperContestEffect } from "./interfaces/Contests/SuperContestEffect";
import { EncounterCondition } from "./interfaces/Encounters/EncounterCondition";
import { EncounterConditionValue } from "./interfaces/Encounters/EncounterConditionValue";
import { EncounterMethod } from "./interfaces/Encounters/EncounterMethod";
import { EvolutionChain } from "./interfaces/Evolution/EvolutionChain";
import { EvolutionTrigger } from "./interfaces/Evolution/EvolutionTrigger";
import { Generation } from "./interfaces/Games/Generation";
import { Pokedex } from "./interfaces/Games/Pokedex";
import { Version } from "./interfaces/Games/Version";
import { VersionGroup } from "./interfaces/Games/VersionGroup";
import { Item } from "./interfaces/Items/Item";
import { ItemAttribute } from "./interfaces/Items/ItemAttribute";
import { ItemCategory } from "./interfaces/Items/ItemCategory";
import { ItemFlingEffect } from "./interfaces/Items/ItemFlingEffect";
import { ItemPocket } from "./interfaces/Items/ItemPocket";
import { Location } from "./interfaces/Locations/Location";
import { LocationArea } from "./interfaces/Locations/LocationArea";
import { PalParkArea } from "./interfaces/Locations/PalParkArea";
import { Region } from "./interfaces/Locations/Region";
import { Machine } from "./interfaces/Machines/Machine";
import { Move } from "./interfaces/Moves/Move";
import { MoveAilment } from "./interfaces/Moves/MoveAilment";
import { MoveBattleStyle } from "./interfaces/Moves/MoveBattleStyle";
import { MoveCategory } from "./interfaces/Moves/MoveCategory";
import { MoveDamageClass } from "./interfaces/Moves/MoveDamageClass";
import { MoveLearnMethod } from "./interfaces/Moves/MoveLearnMethod";
import { MoveTarget } from "./interfaces/Moves/MoveTarget";
import { Ability } from "./interfaces/Pokemon/Ability";
import { Characteristic } from "./interfaces/Pokemon/Characteristic";
import { EggGroup } from "./interfaces/Pokemon/EggGroup";
import { Gender } from "./interfaces/Pokemon/Gender";
import { GrowthRate } from "./interfaces/Pokemon/GrowthRate";
import { Nature } from "./interfaces/Pokemon/Nature";
import { PokeathlonStat } from "./interfaces/Pokemon/PokeathlonStat";
import { Pokemon } from "./interfaces/Pokemon/Pokemon";
import { PokemonColor } from "./interfaces/Pokemon/PokemonColor";
import { PokemonForm } from "./interfaces/Pokemon/PokemonForm";
import { PokemonHabitat } from "./interfaces/Pokemon/PokemonHabitat";
import { PokemonShape } from "./interfaces/Pokemon/PokemonShape";
import { PokemonSpecies } from "./interfaces/Pokemon/PokemonSpecies";
import { Stat } from "./interfaces/Pokemon/Stat";
import { Type } from "./interfaces/Pokemon/Type";
import { ApiResource } from "./interfaces/Utility/ApiResourceList";
import { Language } from "./interfaces/Utility/Language";

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

    public static Generaition = new NamedEndpoint<Generation>("generation");
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

    public static async fromResource(apiResource: ApiResource<any>) {
        const [match, resource, id] = /([a-z-]+)\/(\d+)/.exec(apiResource.url);

        if (apiResource.endpoint) {
            return apiResource.endpoint.resolve(parseInt(id, 10));
        }

        const endpoint = Object.getOwnPropertyNames(this).find(prop => this[prop].resource === resource);
        return this[endpoint].resolve(parseInt(id, 10));
    }
}

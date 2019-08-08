# pokeapi-typescript

## About

pokeapi-typescript is a fully-typed SDK for the [PokeAPI](https://pokeapi.co) using Promises, featuring an easy to manage cache which utilises [Collections](https://github.com/discordjs/collection)

## Installation

Via yarn: `yarn add pokeapi-typescript`

Via npm: `install pokeapi-typescript`

## Getting Started

To start using the PokeAPI, import the module and construct the API Client.
```js
// ES6 imports
import PokeAPI from "pokeapi-typescript";
// Node.js require
const PokeAPI = require("pokeapi-typescript");

const Client = new PokeAPI();
```

### Endpoints

Every endpoint on documented in the [PokeAPI Docs](https://pokeapi.co/docs/v2.html) is available. By default, any data that is fetched will be cached in-memory.

`Client.<Endpoint>.resolve()` retrieves a resource, first checking the internal cache to see if it is available. If no cached resource exists, it will be fetched via the API.

By ID:
```js
Client.Pokemon.fetch("pikachu").then(result => console.log(result));
```

By Name:
```js
Client.Pokemon.fetch(25).then(result => console.log(result));
```

`Client.<Endpoint>.get()` will always retrieve a cached resource, returning null if one could not be found.

`Client.<Endpoint>.fetch()` will always retrieve a resource via the API, updating any cached resources in the process.

Support for retrieving and caching full resource lists is comming soon.

## Endpoints

#### Berries

 - Berry
 - BerryFirmness
 - BerryFlavors

#### Contests

 - ContestType
 - ContestEffect
 - SuperContestEffect

#### Encounters

 - EncounterMethod
 - EncounterCondition
 - EncounterConditionValue

#### Evolution

 - EvolutionChain
 - EvolutionTrigger

#### Games

 - Generation
 - Pokedex
 - Version
 - VersionGroup

#### Items

 - Item
 - ItemAttribute
 - ItemCategory
 - ItemFlingEffect
 - ItemPocket

##### Locations

 - Location
 - LocationArea
 - PalParkArea
 - Region

#### Machines

 - Machine

#### Moves

 - Move
 - MoveAilment
 - MoveBattleStyle
 - MoveCategory
 - MoveDamageClass
 - MoveLearnMethod
 - MoveTarget

#### Pokemon

 - Ability
 - Characteristic
 - EggGroup
 - Gender
 - GrowthRate
 - Nature
 - PokeathlonStat
 - Pokemon
 - PokemonColor
 - PokemonForm
 - PokemonHabitat
 - PokemonShape
 - PokemonSpecies
 - Stat
 - Type

#### Utility

 - Language
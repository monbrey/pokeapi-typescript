# pokeapi-typescript

## About

pokeapi-typescript is a fully-typed SDK for the [PokeAPI](https://pokeapi.co) using Promises, featuring an easy to manage cache which utilises [Collections](https://github.com/discordjs/collection)

## Installation

Via yarn: `yarn add pokeapi-typescript`

Via npm: `npm install pokeapi-typescript`

## Getting Started

To start using the PokeAPI, import the module. All available endpoints are mounted as static properties of the module.
```js
// ES6 imports
import PokeAPI from "pokeapi-typescript";
// Node.js require
const PokeAPI = require("pokeapi-typescript");
```

### Endpoints

Every endpoint documented in the [PokeAPI Docs](https://pokeapi.co/docs/v2.html) is available. By default, any data that is fetched will be cached in-memory.

### .resolve()

`PokeAPI.<Endpoint>.resolve()` retrieves a resource, first checking the internal cache to see if it is available. If no cached resource exists, it will be fetched via the API.

#### By ID
```js
// Using .then()
PokeAPI.Pokemon.resolve(25).then(result => console.log(result));

// Using async/await
const result = await PokeAPI.Pokemon.resolve(25);
```

#### By Name
```js
// Using.then()
PokeAPI.Pokemon.resolve("pikachu").then(result => console.log(result));

// Using async/await
const result = await PokeAPI.Pokemon.resolve("pikachu");
```

### .fetch()

`PokeAPI.<Endpoint>.fetch()` will always retrieve a resource via the API, updating any cached resources in the process.

#### By ID
```js
// Using .then()
PokeAPI.Pokemon.fetch(25).then(result => console.log(result));

// Using async/await
const result = await PokeAPI.Pokemon.fetch(25);
```

#### By Name
```js
// Using.then()
PokeAPI.Pokemon.fetch("pikachu").then(result => console.log(result));

// Using async/await
const result = await PokeAPI.Pokemon.fetch("pikachu");
```

### .get()

`PokeAPI.<Endpoint>.get()` will always retrieve a cached resource, returning null if one could not be found. `.get()` is synchronous and does not return a Promise.

#### By ID
```js
const result = PokeAPI.Pokemon.get(25);
```

#### By Name
```js
const result = PokeAPI.Pokemon.get("pikachu");
```

### .list()

`PokeAPI.<Endpoint>.list()` retrieves the [IApiResourceList](https://pokeapi.co/docs/v2.html#un-named) or [INamedApiResourceList](https://pokeapi.co/docs/v2.html#named) for an endpoint.

`list()` accepts two parameters for pagination
 - `limit` - Number of results to list. Default 20
 - `offset` - Index of result to start listing from. Default 0

```js
// Fetch 1000 Pokemon (all) in a NamedApiResourceList
const resourceList = await PokeAPI.Pokemon.list(1000, 0);
```
`resourceList.results` will contain an array of `IApiResource` or `INamedApiResource` objects depending on the type of list.

### .listAll()

`PokeAPI.<Endpoint>.listAll()` functions like the above, but will return the complete list for an endpoint. This is done by making two API calls.
```js
// Fetch 1000 Pokemon (all) in a NamedApiResourceList
const completeResourceList = await PokeAPI.Pokemon.listAll();
```

## Endpoint List

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
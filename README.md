# pokeapi-typescript

## About

pokeapi-typescript is a fully-typed SDK for the [PokeAPI](https://pokeapi.co) using Promises, featuring an easy to manage cache which utilises [Collections](https://github.com/discordjs/collection)

## Installation

Via yarn: `yarn add pokeapi-typescript`

Via npm: `npm install pokeapi-typescript`

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

Every endpoint documented in the [PokeAPI Docs](https://pokeapi.co/docs/v2.html) is available. By default, any data that is fetched will be cached in-memory.

### .resolve()

`Client.<Endpoint>.resolve()` retrieves a resource, first checking the internal cache to see if it is available. If no cached resource exists, it will be fetched via the API.

#### By ID
```js
// Using .then()
Client.Pokemon.resolve(25).then(result => console.log(result));

// Using async/await
const result = await Client.Pokemon.resolve(25);
```

#### By Name
```js
// Using.then()
Client.Pokemon.resolve("pikachu").then(result => console.log(result));

// Using async/await
const result = await Client.Pokemon.resolve("pikachu");
```

### .fetch()

`Client.<Endpoint>.fetch()` will always retrieve a resource via the API, updating any cached resources in the process.

#### By ID
```js
// Using .then()
Client.Pokemon.fetch(25).then(result => console.log(result));

// Using async/await
const result = await Client.Pokemon.fetch(25);
```

#### By Name
```js
// Using.then()
Client.Pokemon.fetch("pikachu").then(result => console.log(result));

// Using async/await
const result = await Client.Pokemon.fetch("pikachu");
```

### .get()

`Client.<Endpoint>.get()` will always retrieve a cached resource, returning null if one could not be found. `.get()` is synchronous and does not return a Promise.

#### By ID
```js
const result = Client.Pokemon.get(25);
```

#### By Name
```js
const result = Client.Pokemon.get("pikachu");
```

### .list()

`Client.<Endpoint>.list()` retrieves the [ApiResourceList](https://pokeapi.co/docs/v2.html#un-named) or [NamedApiResourceList](https://pokeapi.co/docs/v2.html#named) for an endpoint.

`list()` accepts two parameters for pagination
 - `limit` - Number of results to list. Default 20
 - `offset` - Index of result to start listing from. Default 0

```js
// Fetch 1000 Pokemon (all) in a NamedApiResourceList
const resourceList = await Client.Pokemon.list(1000, 0);
```
`resourceList.results` will contain an array of `ApiResource` or `NamedApiResource` objects depending on the type of list.

An individual `ApiResource` can then be fetched, caching the resource by default.

```js
const pikaResource = resourceList.find(r => r.name === "pikachu");
const pikachu = await pikaResource.fetch();
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
# yabsl
Yet another Beat Saber library. A wrapper for all major Beat Saber services.


## Installation

```bash
npm i yabsl
# or
yarn add yabsl
```

## Usage

### CommonJS import
```js
const yabsl = require('yabsl');

const beatsaver = yabsl.BeatSaver
```

**OR**

```js
const { BeatSaver } = require('yabsl');
```

### ES6 import

```js
import yabsl from 'yabsl';

const beatsaver = yabsl.BeatSaver
```

**OR**

```js
import { BeatSaver } from 'yabsl';
```

## Using the wrapper

```js
import { BeatSaver } from 'yabsl';

async function someFunction() {
    const maps = await BeatSaver.maps.search("Latest", "Camellia", 0, {
        verified: true
    });

    // Returns an array of maps fitting the search criteria
}
```

The library is fully typed so all of the objects and functions will display what they need/have.

**Yabsl is compatible with both JavaScript and TypeScript**

## Roadmap

- [ ] BeatLeader support
- [ ] Full AccSaber support

## All yabsl functions

### BeatSaver

#### Usable functions

**Maps:**
- `id` - Get a map by it's id
- `hash` - Get a map by it's hash
- `multiple` - Get multiple maps by id (eg. ['1', '2', '3'])
- `uploader` - Get maps by uploader
- `collaborations` - Get maps by uploader including collaborations
- `latest` - Get the latest maps
- `search` - Search for the maps, more options explained later.

**Playlists:**
- `id` - Get a playlist by id
- `user` - Get playlists made by a user
- `latest` - Get the latest playlists
- `search` - Search for the playlists, more options explained later.

**Users:**
- `id` - Get a user by their id
- `name` - Get a user by their name

**Votes:**
- `get` - Get all the votes from a specific date onward

#### Options

**ALL OPTIONS ARE OPTIONAL!!!**

Map search options:

| Option | Type |
| ------ | ---- |
| automapper | boolean |
| chroma | boolean |
| cinema | boolean |
| curated | boolean |
| from | string (date) |
| fullSpread | boolean |
| maxBpm | number |
| maxDuration | number |
| maxNps | number |
| maxRating | number |
| minBpm | number |
| minDuration | number |
| minNps | number |
| minRating | number |
| noodle | boolean |
| tags | string[] |
| to | string (date) |
| verified | boolean |

Playlist search options:

| Option | Type |
| ------ | ---- |
| curated | boolean |
| from | string (date) |
| includeEmpty | boolean |
| maxNps | number |
| minNps | number |
| to | string (date) |
| verified | boolean |

### ScoreSaber

#### Usable function

**Leaderboards:**
- `get` - Get leaderboards by a text query, more options explained later
- `id` - Get a leaderboard by it's id
- `infoByHash` - Get a leaderboard by a song's hash and difficulty
- `scoresById` - Get the scores on a leaderboard by it's id
- `scoresByHash` - Get the scores by the songs's hash and difficulty, more options explained later
- `getDifficulties` - Get the difficulties of a map by it's hash

**Players:**
- `get` - Get the players by querying their name
- `count` - Returns the amount of players by your query
- `basic` - Get the basic info of a player with their ID
- `full` - Get the full info of a player with their ID
- `scores` - Get the player's scores by their id

**Rankings:**
- `id` - Get a ranking request by it's ID
- `leaderboardId` - Get a ranking request by it's leaderboard ID

#### Options

**ALL OPTIONS ARE OPTIONAL!!!**

Leadearboards get options:

| Option | Type |
| ------ | ---- |
| ranked | boolean |
| qualified | boolean |
| loved | boolean |
| minStar | number |
| maxStar | number |
| category | number |
| sort | number |
| unique | boolean |
| withMetadata | boolean |

Scores by hash options:

| Option | Type |
| ------ | ---- |
| countries | string[] |
| search | string |
| withMetadata | boolean |

### Hitbloq

#### Usable functions

**Ladders:**
- `get` - Get the ladder for a certain pool ID
- `near` - Get the players near the player of the pool ID

**Pools:**
- `get` - Get the pool names
- `detailed` - Get the pools but with more information
- `popular` - Get the names of all the popular pools 

**Ranked:**
- `id` - Get the pool information + the first 30 ranked maps
- `maps` - Get the ranked maps from a pool

**Users:**
- `scores` - Get a few scores from a user on a certain pool
- `allScores` - Get all the scores from a user on a certain pool
- `badges` - Get the list of badges that a user has

### AccSaber

**Leaderboards:**
- `overallAcc` - Get all the players on the leaderboard for overall accuracy
- `techAcc` - Get all the players on the leaderboard for tech accuracy
- `trueAcc` - Get all the players on the leaderboard for true accuracy
- `standardAcc` - Get all the players on the leaderboard for standard accuracy

**Players:**
- `get` - Get all the players on AccSaber
- `id` - Get a certain player and choose which category to look up their stats for
const { Maps } = require("./beatsaver/maps")
const { Playlists } = require("./beatsaver/playlists")
const { UsersBS } = require("./beatsaver/users")
const { Votes } = require("./beatsaver/votes")

exports.BeatSaver = {
    maps: Maps,
    playlists: Playlists,
    users: UsersBS,
    votes: Votes
};

const { LeaderboardsSS } = require("./scoresaber/leaderboards")
const { Players } = require("./scoresaber/players")
const { Rankings } = require("./scoresaber/rankings")

exports.ScoreSaber = {
    leaderboards: LeaderboardsSS,
    players: Players,
    rankings: Rankings
}

const { Ranked } = require("./hitbloq/ranked")
const { Pools } = require("./hitbloq/pools")
const { Ladders } = require("./hitbloq/ladder")
const { UsersHB } = require("./hitbloq/users")

exports.HitBloq = {
    pools: Pools,
    ranked: Ranked,
    ladders: Ladders,
    users: UsersHB
}

const { LeaderboardsAS } = require('./accsaber/leaderboards')
const { PlayersAS } = require('./accsaber/players')

exports.AccSaber = {
    leaderboards: LeaderboardsAS,
    players: PlayersAS
}
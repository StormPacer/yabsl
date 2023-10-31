import { Playlist, PlaylistSearchOptions, PlaylistPage } from "./beatsaver/playlists"
import { BSMap, MapSearchOptions } from "./beatsaver/maps"
import { User } from "./beatsaver/users"
import { Vote } from "./beatsaver/votes"

import { Board, SSLeaderboardSearchOptions, BoardInfo, BoardScores, SSLeaderboardScoreOptions, SSLeaderboardScoreOptionsHash, SSLeaderboardDiffHash } from "./scoresaber/leaderboards"
import { SSPlayer, SSPlayerBasic, SSPlayerFull, SSPlayerScores } from "./scoresaber/players"
import { Ranking } from "./scoresaber/rankings"

import { MapPool, Maps } from "./hitbloq/ranked"
import { MapPoolsDetailed } from "./hitbloq/pools"
import { Ladder, Player } from "./hitbloq/ladder"
import { Badges, Scores } from "./hitbloq/users"

import { PlayerAS } from "./accsaber/leaderboards"

import { ClanGetOptions, ClanTagOptions, Clans } from "./beatleader/clans"
import { BLLeaderboard, BLLeaderboardOptions } from "./beatleader/leaderboards"
import { BLLeaderboardId, BLLeaderboardIdOptions } from "./beatleader/leaderboardId"
import { BLLeaderboardClan } from "./beatleader/leaderboardClan"
import { BLLeaderboardRanking } from "./beatleader/leaderboardRanking"
import { BLLeaderboardStats } from "./beatleader/leaderboardStats"
import { BLPlayer, BLPlayerOptions } from "./beatleader/players"
import { BLPlayers, BLPlayersEventsOptions, BLPlayersOptions } from "./beatleader/playersGet"
import { BLAccGraph, BLHistogramOptions, BLScores, BLScoresCompact, BLScoresHistory, BLScoresOptions } from "./beatleader/scores"
import { BLPinnedScore } from "./beatleader/scoresPinned"
import { BLPlaylist, BlFullPlaylist } from "./beatleader/playlists"
import { BLEvent } from "./beatleader/events"
import { BLEventOptions, BLEvents } from "./beatleader/eventsGet"
import { MapsGetAS, PlaylistAS } from "./accsaber/maps"

export namespace BeatSaver {
    export namespace maps {
        function id(id: string): Promise<BSMap>
        function hash(hash: string): Promise<BSMap>
        function multiple(ids: string[]): Promise<BSMap[]>
        function uploader(id: number, page?: number): Promise<BSMap[]>
        function collaborations(id: number, before?: string, pageSize?: number): Promise<BSMap[]>
        function latest(sort?: "FIRST_PUBLISHED" | "UPDATED" | "LAST_PUBLISHED" | "CREATED" | "CURATED", pageSize?: number, before?: string, after?: string, automapper?: boolean): Promise<BSMap[]>
        function search(sortOrder: "Latest" | "Relevance" | "Rating" | "Curated", q?: string, page?: number, options?: MapSearchOptions): Promise<BSMap[]>
    }

    export namespace playlists {
        function latest(sort?: "CREATED" | "UPDATED" | "SONGS_UPDATED", before?: string, after?: string): Promise<Playlist[]>
        function search(sortOrder: "Latest" | "Relevance" | "Rating" | "Curated", q?: string, page?: number, options?: PlaylistSearchOptions): Promise<Playlist[]>
        function id(id: number, page?: number): Promise<PlaylistPage>
        function user(id: number, page?: number): Promise<Playlist[]>
    }

    export namespace users {
        function id(id: number): Promise<User>
        function name(name: string): Promise<User>
    }

    export namespace votes {
        function get(since: string): Promise<Vote[]>
    }
}

export namespace ScoreSaber {
    export namespace leaderboards {
        function get(q?: string, page?: number, options?: SSLeaderboardSearchOptions): Promise<Board>
        function infoById(id: number): Promise<BoardInfo>
        function infoByHash(hash: string, difficulty: 1 | 3 | 5 | 7 | 9, gameMode?: string): Promise<BoardInfo>
        function scoresById(id: number, page?: number, options?: SSLeaderboardScoreOptions): Promise<BoardScores>
        function scoresByHash(hash: string, difficulty: 1 | 3 | 5 | 7 | 9, page?: number, options?: SSLeaderboardScoreOptionsHash): Promise<BoardScores>
        function getDifficulties(hash: string): Promise<SSLeaderboardDiffHash[]>
    }

    export namespace players {
        function get(q?: string, page?: number, countries?: string[], withMetadata?: boolean): Promise<SSPlayer>
        function count(q?:string, countries?: string[]): Promise<number>
        function basic(id: string): Promise<SSPlayerBasic>
        function full(id: string): Promise<SSPlayerFull>
        function scores(id: string, sort?: "top" | "recent", page?: number, limit?: number, withMetadata?: boolean): Promise<SSPlayerScores>
    }

    export namespace rankings {
        function id(id: number): Promise<Ranking>
        function leaderboardId(id: number): Promise<Ranking>
    }
}

export namespace HitBloq {
    export namespace ranked {
        function id(id: string): Promise<MapPool>
        function maps(id: string, page?: number): Promise<Maps>
    }

    export namespace pools {
        function get(): Promise<string[]>
        function detailed(): Promise<MapPoolsDetailed>
        function popular(): Promise<string[]>
    }

    export namespace ladders {
        function get(id: string, page?: number): Promise<Ladder>
        function near(id: string, playerId: number): Promise<Player>
    }

    export namespace users {
        function scores(id: number, poolId: string, sort?: "top" | "newest" | "oldest", page?: number): Promise<Scores[]>
        function allScores(id: number, poolId: string, sort?: "top" | "newest" | "oldest"): Promise<Scores[]>
        function badges(id: number): Promise<Badges[]>
    }
}

export namespace AccSaber {
    export namespace leaderboards {
        function overallAcc(): Promise<PlayerAS[]>
        function standardAcc(): Promise<PlayerAS[]>
        function trueAcc(): Promise<PlayerAS[]>
        function techAcc(): Promise<PlayerAS[]>
    }

    export namespace players {
        function get(): Promise<PlayerAS[]>
        function id(id: string, type?: "overall" | "standard" | "true" | "tech"): Promise<PlayerAS>
    }

    export namespace maps {
        function get(): Promise<MapsGetAS[]>
        function id(id: string): Promise<MapsGetAS>
        function category(category: "standard" | "true" | "tech"): Promise<MapsGetAS[]>
        function playlist(download?: boolean, name?: string, location?: string): Promise<PlaylistAS | void>
    }
}

export namespace BeatLeader {
    export namespace clans {
        function get(options?: ClanGetOptions): Promise<Clans>
        function tag(id: string, options?: ClanTagOptions): Promise<Clans>
    }

    export namespace leaderboards {
        function get(options?: BLLeaderboardOptions): Promise<BLLeaderboard>
        function getGrouped(options?: BLLeaderboardOptions): Promise<BLLeaderboard>
        function id(id: string, options?: BLLeaderboardIdOptions): Promise<BLLeaderboardId>
        function hash(hash: string): Promise<BLLeaderboardId>
        function clanRanking(leaderboardId: string, clanId: string, page?: number, count?: number): Promise<BLLeaderboardClan>
        function clanRankingGlobal(clanId: string, page?: number, count?: number): Promise<BLLeaderboardClan>
        function ranking(id: string): Promise<BLLeaderboardRanking>
        function statistic(id: string): Promise<BLLeaderboardStats>
    }

    export namespace players {
        function id(id: string, options?: BLPlayerOptions): Promise<BLPlayer>
        function discord(id: string): Promise<BLPlayer>
        function beatsaver(id: string): Promise<BLPlayer>
        function get(options?: BLPlayersOptions): Promise<BLPlayers>
        function event(id: string, options?: BLPlayersEventsOptions): Promise<BLPlayers>
    }

    export namespace scores {
        function get(id: string, options?: BLScoresOptions): Promise<BLScores>;
        function getCompact(id: string, options?: BLScoresOptions): Promise<BLScoresCompact>;
        function getValue(id: string, hash: string, difficulty: string, mode: string): Promise<number>;
        function histogram(id: string, options?: BLHistogramOptions): Promise<string>;
        function accGraph(id: string, leaderboardContext?: number): Promise<BLAccGraph[]>;
        function history(id: string, count?: number, leaderboardContext?: number): Promise<BLScoresHistory[]>;
        function pinnedScores(id: string, leaderboardContext?: number): Promise<BLPinnedScore[]>;
    }

    export namespace playlists {
        function get(): Promise<BLPlaylist[]>
        function id(id: string): Promise<BlFullPlaylist>
        function image(playlistId: string, download?: boolean, name?: string, location?: string): Promise<Buffer | void>
    }

    export namespace events {
        function get(options?: BLEventOptions): Promise<BLEvents>
        function id(id: string): Promise<BLEvent>
    }
}
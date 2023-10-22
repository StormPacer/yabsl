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
}
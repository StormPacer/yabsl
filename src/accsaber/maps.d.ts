export interface MapsGetAS {
    songName: string
    songSubName: string
    songAuthorName: string
    levelAuthorName: string
    difficulty: string
    leaderboardId: string
    beatSaverKey: string
    songHash: string
    complexity: number
    categoryDisplayName: string
    dateRanked: string
}

interface Difficulty {
    characteristic: string;
    name: string;
}

interface Song {
    hash: string;
    songName: string;
    difficulties: Difficulty[];
}

export interface PlaylistAS {
    playlistTitle: string;
    playlistAuthor: string;
    image: string;
    syncURL: string;
    songs: Song[];
}
interface ScoreStats {
    totalScore: number;
    totalRankedScore: number;
    averageRankedAccuracy: number;
    totalPlayCount: number;
    rankedPlayCount: number;
    replaysWatched: number;
}

interface Player {
    id: string;
    name: string;
    profilePicture: string;
    bio: string;
    country: string;
    pp: number;
    rank: number;
    countryRank: number;
    role?: string;
    badges?: any;
    histories: string;
    permissions: number;
    banned: boolean;
    inactive: boolean;
    scoreStats: ScoreStats;
}

interface Metadata {
    total: number;
    page: number;
    itemsPerPage: number;
}

export interface SSPlayer {
    players: Player[];
    metadata: Metadata;
}

export interface SSPlayerBasic {
    id: string;
    name: string;
    profilePicture: string;
    bio: string;
    country: string;
    pp: number;
    rank: number;
    countryRank: number;
    role?: any;
    badges?: any;
    histories: string;
    permissions: number;
    banned: boolean;
    inactive: boolean;
    scoreStats?: any;
}

export interface SSPlayerFull {
    id: string;
    name: string;
    profilePicture: string;
    bio: string;
    country: string;
    pp: number;
    rank: number;
    countryRank: number;
    role?: any;
    badges: any[];
    histories: string;
    permissions: number;
    banned: boolean;
    inactive: boolean;
    scoreStats: ScoreStats;
}

interface Score {
    id: number;
    rank: number;
    baseScore: number;
    modifiedScore: number;
    pp: number;
    weight: number;
    modifiers: string;
    multiplier: number;
    badCuts: number;
    missedNotes: number;
    maxCombo: number;
    fullCombo: boolean;
    hmd: number;
    timeSet: string;
    hasReplay: boolean;
}

interface Difficulty {
    leaderboardId: number;
    difficulty: number;
    gameMode: string;
    difficultyRaw: string;
}

interface Leaderboard {
    id: number;
    songHash: string;
    songName: string;
    songSubName: string;
    songAuthorName: string;
    levelAuthorName: string;
    difficulty: Difficulty;
    maxScore: number;
    createdDate: string;
    rankedDate: string;
    qualifiedDate?: string;
    lovedDate?: any;
    ranked: boolean;
    qualified: boolean;
    loved: boolean;
    maxPP: number;
    stars: number;
    plays: number;
    dailyPlays: number;
    positiveModifiers: boolean;
    playerScore?: any;
    coverImage: string;
    difficulties?: any;
}

export interface PlayerScore {
    score: Score;
    leaderboard: Leaderboard;
}

export interface SSPlayerScores {
    playerScores: PlayerScore[];
    metadata: Metadata;
}
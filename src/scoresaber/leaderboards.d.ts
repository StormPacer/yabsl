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
    qualifiedDate: string;
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

interface Metadata {
    total: number;
    page: number;
    itemsPerPage: number;
}

export interface Board {
    leaderboards: Leaderboard[];
    metadata: Metadata;
}

export interface SSLeaderboardSearchOptions {
    ranked?: boolean;
    qualified?: boolean;
    loved?: boolean;
    minStar?: number;
    maxStar?: number;
    category?: number;
    sort?: number;
    unique?: boolean;
    withMetadata?: boolean;
}

export interface BoardInfo {
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
    qualifiedDate: string;
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
    difficulties: Difficulty[];
}

interface LeaderboardPlayerInfo {
    id: string;
    name: string;
    profilePicture: string;
    country: string;
    permissions: number;
    badges: string;
    role?: string;
}

interface Score {
    id: number;
    leaderboardPlayerInfo: LeaderboardPlayerInfo;
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

export interface BoardScores {
    scores: Score[];
    metadata: Metadata;
}

export interface SSLeaderboardScoreOptions {
    countries?: string[];
    search?: string;
    withMetadata?: boolean;
}

export interface SSLeaderboardScoreOptionsHash {
    countries?: string[];
    search?: string;
    gameMode?: string;
    withMetadata?: boolean;
}

export interface SSLeaderboardDiffHash {
    leaderboardId: number;
    difficulty: number;
    gameMode: string;
    difficultyRaw: string;
}
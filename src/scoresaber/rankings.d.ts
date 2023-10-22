

interface Difficulty {
    leaderboardId: number;
    difficulty: number;
    gameMode: string;
    difficultyRaw: string;
}

interface LeaderboardInfo {
    id: number;
    songHash: string;
    songName: string;
    songSubName: string;
    songAuthorName: string;
    levelAuthorName: string;
    difficulty: Difficulty;
    maxScore: number;
    createdDate: string;
    rankedDate?: any;
    qualifiedDate?: any;
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

interface RankVotes {
    upvotes: number;
    downvotes: number;
    myVote: boolean;
    neutral: number;
}

interface Difficulty2 {
    requestId: number;
    difficulty: number;
}

export interface Ranking {
    requestId: number;
    requestDescription: string;
    leaderboardInfo: LeaderboardInfo;
    created_at: string;
    rankVotes: RankVotes;
    qatVotes: RankVotes;
    rankComments: any[];
    qatComments: any[];
    requestType: number;
    approved: number;
    difficulties: Difficulty2[];
}
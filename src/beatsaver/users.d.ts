interface DiffStats {
    total: number;
    easy: number;
    normal: number;
    hard: number;
    expert: number;
    expertPlus: number;
}

interface Stats {
    totalUpvotes: number;
    totalDownvotes: number;
    totalMaps: number;
    avgBpm: number;
    avgScore: number;
    avgDuration: number;
    firstUpload: string;
    lastUpload: string;
    diffStats: DiffStats;
}

interface FollowData {
    followers: number;
    follows: number;
    following: boolean;
    upload: boolean;
    curation: boolean;
}

export interface User {
    id: number;
    name: string;
    description: string;
    hash: string;
    avatar: string;
    stats: Stats;
    followData: FollowData;
    type: string;
    admin: boolean;
    curator: boolean;
    playlistUrl: string;
}
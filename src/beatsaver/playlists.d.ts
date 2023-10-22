interface Owner {
    id: number;
    name: string;
    avatar: string;
    type: string;
    admin: boolean;
    curator: boolean;
    playlistUrl: string;
}

interface Stats {
    totalMaps: number;
    mapperCount: number;
    totalDuration: number;
    minNps: number;
    maxNps: number;
    upVotes: number;
    downVotes: number;
    avgScore: number;
}

export interface Playlist {
    playlistId: number;
    name: string;
    description: string;
    playlistImage: string;
    playlistImage512: string;
    owner: Owner;
    curator: Curator;
    stats: Stats;
    createdAt: string;
    updatedAt: string;
    songsChangedAt: string;
    curatedAt: string;
    downloadURL: string;
    type: string;
}

export interface PlaylistSearchOptions {
    curated?: boolean;
    from?: string;
    includeEmpty?: boolean;
    maxNps?: number;
    minNps?: number;
    to?: string;
    verified?: boolean;
}

interface Owner {
    id: number;
    name: string;
    hash: string;
    avatar: string;
    type: string;
    admin: boolean;
    curator: boolean;
    verifiedMapper: boolean;
    playlistUrl: string;
}

interface Curator {
    id: number;
    name: string;
    hash: string;
    avatar: string;
    type: string;
    admin: boolean;
    curator: boolean;
    curatorTab: boolean;
    verifiedMapper: boolean;
    playlistUrl: string;
}

interface Stats {
    totalMaps: number;
    mapperCount: number;
    totalDuration: number;
    minNps: number;
    maxNps: number;
    upVotes: number;
    downVotes: number;
    avgScore: number;
}

interface Uploader {
    id: number;
    name: string;
    hash?: string;
    avatar: string;
    type: string;
    admin: boolean;
    curator: boolean;
    verifiedMapper?: boolean;
    playlistUrl: string;
    curatorTab?: boolean;
}

interface Metadata {
    bpm: number;
    duration: number;
    songName: string;
    songSubName: string;
    songAuthorName: string;
    levelAuthorName: string;
}

interface Stats2 {
    plays: number;
    downloads: number;
    upvotes: number;
    downvotes: number;
    score: number;
    reviews?: number;
}

interface ParitySummary {
    errors: number;
    warns: number;
    resets: number;
}

interface Diff {
    njs: number;
    offset: number;
    notes: number;
    bombs: number;
    obstacles: number;
    nps: number;
    length: number;
    characteristic: string;
    difficulty: string;
    events: number;
    chroma: boolean;
    me: boolean;
    ne: boolean;
    cinema: boolean;
    seconds: number;
    paritySummary: ParitySummary;
    maxScore: number;
    label?: string;
}

interface Version {
    hash: string;
    state: string;
    createdAt: string;
    sageScore: number;
    diffs: Diff[];
    downloadURL: string;
    coverURL: string;
    previewURL: string;
}

interface Curator2 {
    id: number;
    name: string;
    avatar: string;
    type: string;
    admin: boolean;
    curator: boolean;
    curatorTab: boolean;
    verifiedMapper?: boolean;
    playlistUrl: string;
}

interface Map {
    id: string;
    name: string;
    description: string;
    uploader: Uploader;
    metadata: Metadata;
    stats: Stats2;
    uploaded: string;
    automapper: boolean;
    ranked: boolean;
    qualified: boolean;
    versions: Version[];
    createdAt: string;
    updatedAt: string;
    lastPublishedAt: string;
    tags: string[];
    bookmarked: boolean;
    curator?: Curator2;
    curatedAt?: string;
}

interface Map2 {
    map: Map;
    order: number;
}

export interface PlaylistPage {
    playlist: Playlist;
    maps: Map2[];
}
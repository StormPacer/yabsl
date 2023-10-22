export interface BSMap {
    id: string
    name: string
    description: string
    uploader: Uploader
    metadata: Metadata
    stats: Stats
    uploaded: string
    automapper: boolean
    ranked: boolean
    qualified: boolean
    versions: Version[]
    createdAt: string
    updatedAt: string
    lastPublishedAt: string
    tags: string[]
    bookmarked: boolean
}

interface Uploader {
    id: number
    name: string
    hash: string
    avatar: string
    type: string
    admin: boolean
    curator: boolean
    playlistUrl: string
}

interface Metadata {
    bpm: number
    duration: number
    songName: string
    songSubName: string
    songAuthorName: string
    levelAuthorName: string
}

interface Stats {
    plays: number
    downloads: number
    upvotes: number
    downvotes: number
    score: number
}

interface Version {
    hash: string
    state: string
    createdAt: string
    sageScore: number
    diffs: Diff[]
    downloadURL: string
    coverURL: string
    previewURL: string
}

interface Diff {
    njs: number
    offset: number
    notes: number
    bombs: number
    obstacles: number
    nps: number
    length: number
    characteristic: string
    difficulty: string
    events: number
    chroma: boolean
    me: boolean
    ne: boolean
    cinema: boolean
    seconds: number
    paritySummary: ParitySummary
    maxScore: number
    label: string
}

interface ParitySummary {
    errors: number
    warns: number
    resets: number
}

export interface MapSearchOptions {
    automapper?: boolean,
    chroma?: boolean,
    cinema?: boolean,
    curated?: boolean,
    from?: string,
    fullSpread?: boolean,
    maxBpm?: number,
    maxDuration?: number,
    maxNps?: number,
    maxRating?: number,
    minBpm?: number,
    minDuration?: number,
    minNps?: number,
    minRating?: number,
    noodle?: boolean,
    tags?: string[],
    to: string,
    verified?: boolean
}
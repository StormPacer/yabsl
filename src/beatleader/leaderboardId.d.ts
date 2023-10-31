interface ModifierValues {
    modifierId: number;
    da: number;
    fs: number;
    sf: number;
    ss: number;
    gn: number;
    na: number;
    nb: number;
    nf: number;
    no: number;
    pm: number;
    sc: number;
    sa: number;
    op: number;
}

interface ModifiersRating {
    id: number;
    fsPredictedAcc: number;
    fsPassRating: number;
    fsAccRating: number;
    fsTechRating: number;
    fsStars: number;
    ssPredictedAcc: number;
    ssPassRating: number;
    ssAccRating: number;
    ssTechRating: number;
    ssStars: number;
    sfPredictedAcc: number;
    sfPassRating: number;
    sfAccRating: number;
    sfTechRating: number;
    sfStars: number;
}

interface Difficulty {
    id: number;
    value: number;
    mode: number;
    difficultyName: string;
    modeName: string;
    status: number;
    modifierValues: ModifierValues;
    modifiersRating: ModifiersRating;
    nominatedTime: number;
    qualifiedTime: number;
    rankedTime: number;
    stars: number;
    predictedAcc: number;
    passRating: number;
    accRating: number;
    techRating: number;
    type: number;
    njs: number;
    nps: number;
    notes: number;
    bombs: number;
    walls: number;
    maxScore: number;
    duration: number;
    requirements: number;
}

interface Song {
    id: string;
    hash: string;
    name: string;
    subName: string;
    author: string;
    mapper: string;
    mapperId: number;
    coverImage: string;
    fullCoverImage: string;
    downloadUrl: string;
    bpm: number;
    duration: number;
    tags: string;
    uploadTime: number;
    difficulties: Difficulty[];
}

interface Social {
    id: number;
    service: string;
    link: string;
    user: string;
    userId: string;
    playerId: string;
}

interface ScoreStats {
    id: number;
    totalScore: number;
    totalUnrankedScore: number;
    totalRankedScore: number;
    lastScoreTime: number;
    lastUnrankedScoreTime: number;
    lastRankedScoreTime: number;
    averageRankedAccuracy: number;
    averageWeightedRankedAccuracy: number;
    averageUnrankedAccuracy: number;
    averageAccuracy: number;
    medianRankedAccuracy: number;
    medianAccuracy: number;
    topRankedAccuracy: number;
    topUnrankedAccuracy: number;
    topAccuracy: number;
    topPp: number;
    topBonusPP: number;
    topPassPP: number;
    topAccPP: number;
    topTechPP: number;
    peakRank: number;
    rankedMaxStreak: number;
    unrankedMaxStreak: number;
    maxStreak: number;
    averageLeftTiming: number;
    averageRightTiming: number;
    rankedPlayCount: number;
    unrankedPlayCount: number;
    totalPlayCount: number;
    rankedImprovementsCount: number;
    unrankedImprovementsCount: number;
    totalImprovementsCount: number;
    rankedTop1Count: number;
    unrankedTop1Count: number;
    top1Count: number;
    rankedTop1Score: number;
    unrankedTop1Score: number;
    top1Score: number;
    averageRankedRank: number;
    averageWeightedRankedRank: number;
    averageUnrankedRank: number;
    averageRank: number;
    sspPlays: number;
    ssPlays: number;
    spPlays: number;
    sPlays: number;
    aPlays: number;
    topPlatform: string;
    topHMD: number;
    dailyImprovements: number;
    authorizedReplayWatched: number;
    anonimusReplayWatched: number;
    watchedReplays: number;
}

interface ContextExtension {
    id: number;
    context: number;
    pp: number;
    accPp: number;
    techPp: number;
    passPp: number;
    rank: number;
    country: string;
    countryRank: number;
    lastWeekPp: number;
    lastWeekRank: number;
    lastWeekCountryRank: number;
    playerId: string;
    player: string;
    scoreStats: ScoreStats;
    banned: boolean;
    name: string;
}

interface PatreonFeatures {
    id: number;
    bio: string;
    message: string;
    leftSaberColor: string;
    rightSaberColor: string;
}

interface ProfileSettings {
    id: number;
    bio: string;
    message: string;
    effectName: string;
    profileAppearance: string;
    hue: number;
    saturation: number;
    leftSaberColor: string;
    rightSaberColor: string;
    profileCover: string;
    starredFriends: string;
    showBots: boolean;
    showAllRatings: boolean;
}

interface Clan {
    id: number;
    tag: string;
    color: string;
}

interface Player {
    id: string;
    name: string;
    platform: string;
    avatar: string;
    country: string;
    bot: boolean;
    pp: number;
    rank: number;
    countryRank: number;
    role: string;
    socials: Social[];
    contextExtensions: ContextExtension[];
    patreonFeatures: PatreonFeatures;
    profileSettings: ProfileSettings;
    clans: Clan[];
}

interface ScoreImprovement {
    id: number;
    timeset: string;
    score: number;
    accuracy: number;
    pp: number;
    bonusPp: number;
    rank: number;
    accRight: number;
    accLeft: number;
    averageRankedAccuracy: number;
    totalPp: number;
    totalRank: number;
    badCuts: number;
    missedNotes: number;
    bombCuts: number;
    wallsHit: number;
    pauses: number;
}

interface Feedback {
    id: number;
    rtMember: string;
    value: number;
}

interface RankVoting {
    scoreId: number;
    playerId: string;
    hash: string;
    diff: string;
    mode: string;
    rankability: number;
    stars: number;
    type: number;
    timeset: number;
    feedbacks: Feedback[];
}

interface Metadata {
    id: number;
    pinnedContexts: number;
    priority: number;
    description: string;
    linkService: string;
    linkServiceIcon: string;
    link: string;
}

interface Offsets {
    id: number;
    frames: number;
    notes: number;
    walls: number;
    heights: number;
    pauses: number;
}

interface Score {
    id: number;
    baseScore: number;
    modifiedScore: number;
    accuracy: number;
    playerId: string;
    pp: number;
    bonusPp: number;
    passPP: number;
    accPP: number;
    techPP: number;
    rank: number;
    country: string;
    fcAccuracy: number;
    fcPp: number;
    weight: number;
    replay: string;
    modifiers: string;
    badCuts: number;
    missedNotes: number;
    bombCuts: number;
    wallsHit: number;
    pauses: number;
    fullCombo: boolean;
    platform: string;
    maxCombo: number;
    maxStreak: number;
    hmd: number;
    controller: number;
    leaderboardId: string;
    timeset: string;
    timepost: number;
    replaysWatched: number;
    playCount: number;
    priority: number;
    player: Player;
    scoreImprovement: ScoreImprovement;
    rankVoting: RankVoting;
    metadata: Metadata;
    offsets: Offsets;
}

interface Change {
    id: number;
    timeset: number;
    playerId: string;
    oldRankability: number;
    oldStars: number;
    oldAccRating: number;
    oldPassRating: number;
    oldTechRating: number;
    oldType: number;
    oldCriteriaMet: number;
    oldModifiers: ModifierValues;
    oldModifiersRating: ModifiersRating;
    newRankability: number;
    newStars: number;
    newAccRating: number;
    newPassRating: number;
    newTechRating: number;
    newType: number;
    newCriteriaMet: number;
    newModifiers: ModifierValues;
    newModifiersRating: ModifiersRating;
}

interface Change2 {
    id: number;
    timeset: number;
    playerId: string;
    oldRankability: number;
    oldStars: number;
    oldAccRating: number;
    oldPassRating: number;
    oldTechRating: number;
    oldType: number;
    oldCriteriaMet: number;
    oldCriteriaCommentary: string;
    oldModifiers: ModifierValues;
    newRankability: number;
    newStars: number;
    newAccRating: number;
    newPassRating: number;
    newTechRating: number;
    newType: number;
    newCriteriaMet: number;
    newCriteriaCommentary: string;
    newModifiers: ModifierValues;
}

interface Comment {
    id: number;
    playerId: string;
    timeset: number;
    value: string;
    editTimeset: number;
    edited: boolean;
    rankQualificationId: number;
    rankQualification: string;
    discordMessageId: string;
}

interface Vote {
    id: number;
    playerId: string;
    timeset: number;
    value: number;
    editTimeset: number;
    edited: boolean;
    rankQualificationId: number;
    rankQualification: string;
    discordRTMessageId: string;
}

interface Qualification {
    id: number;
    timeset: number;
    rtMember: string;
    criteriaTimeset: number;
    criteriaMet: number;
    criteriaChecker: string;
    criteriaCommentary: string;
    mapperAllowed: boolean;
    mapperId: string;
    mapperQualification: boolean;
    approvalTimeset: number;
    approved: boolean;
    approvers: string;
    criteriaCheck: string;
    modifiers: ModifierValues;
    modifiersRating: ModifiersRating;
    changes: Change2[];
    comments: Comment[];
    criteriaComments: Comment[];
    qualityVote: number;
    votes: Vote[];
    discordChannelId: string;
    discordRTChannelId: string;
}

interface Change3 {
    id: number;
    timeset: number;
    playerId: string;
    oldKeep: boolean;
    oldStars: number;
    oldType: number;
    oldCriteriaMet: number;
    oldCriteriaCommentary: string;
    oldModifiers: ModifierValues;
    newKeep: boolean;
    newStars: number;
    newType: number;
    newCriteriaMet: number;
    newCriteriaCommentary: string;
    newModifiers: ModifierValues;
}

interface Reweight {
    id: number;
    timeset: number;
    rtMember: string;
    keep: boolean;
    stars: number;
    passRating: number;
    techRating: number;
    predictedAcc: number;
    type: number;
    criteriaMet: number;
    criteriaCommentary: string;
    finished: boolean;
    modifiers: ModifierValues;
    modifiersRating: ModifiersRating;
    changes: Change3[];
}

interface LeaderboardGroup {
    id: string;
    status: number;
    timestamp: number;
}

interface Friend {
    id: string;
    friends: string[];
}

interface Badge {
    id: number;
    description: string;
    image: string;
    link: string;
    timeset: number;
    hidden: boolean;
}

interface Change4 {
    id: number;
    timestamp: number;
    playerId: string;
    oldName: string;
    newName: string;
    oldCountry: string;
    newCountry: string;
    changer: string;
}

interface History {
    id: number;
    context: number;
    timestamp: number;
    playerId: string;
    pp: number;
    rank: number;
    countryRank: number;
    totalScore: number;
    totalUnrankedScore: number;
    totalRankedScore: number;
    lastScoreTime: number;
    lastUnrankedScoreTime: number;
    lastRankedScoreTime: number;
    averageRankedAccuracy: number;
    averageWeightedRankedAccuracy: number;
    averageUnrankedAccuracy: number;
    averageAccuracy: number;
    medianRankedAccuracy: number;
    medianAccuracy: number;
    topRankedAccuracy: number;
    topUnrankedAccuracy: number;
    topAccuracy: number;
    topPp: number;
    topBonusPP: number;
    peakRank: number;
    maxStreak: number;
    averageLeftTiming: number;
    averageRightTiming: number;
    rankedPlayCount: number;
    unrankedPlayCount: number;
    totalPlayCount: number;
    rankedImprovementsCount: number;
    unrankedImprovementsCount: number;
    totalImprovementsCount: number;
    averageRankedRank: number;
    averageWeightedRankedRank: number;
    averageUnrankedRank: number;
    averageRank: number;
    sspPlays: number;
    ssPlays: number;
    spPlays: number;
    sPlays: number;
    aPlays: number;
    topPlatform: string;
    topHMD: number;
    dailyImprovements: number;
    replaysWatched: number;
    watchedReplays: number;
}

interface EventsParticipating {
    id: number;
    eventId: number;
    name: string;
    playerId: string;
    country: string;
    rank: number;
    countryRank: number;
    pp: number;
}

interface Level {
    id: number;
    image: string;
    smallImage: string;
    name: string;
    description: string;
    detailedDescription: string;
    color: string;
    value: number;
    level: number;
    achievementDescriptionId: number;
}

interface AchievementDescription {
    id: number;
    name: string;
    description: string;
    link: string;
    achievements: string[];
    levels: Level[];
}

interface Achievement {
    id: number;
    playerId: string;
    player: string;
    achievementDescriptionId: number;
    achievementDescription: AchievementDescription;
    level: Level;
    timeset: number;
    count: number;
}

interface Player2 {
    id: string;
    name: string;
    platform: string;
    avatar: string;
    country: string;
    role: string;
    mapperId: number;
    pp: number;
    accPp: number;
    techPp: number;
    passPp: number;
    rank: number;
    countryRank: number;
    lastWeekPp: number;
    lastWeekRank: number;
    lastWeekCountryRank: number;
    banned: boolean;
    bot: boolean;
    inactive: boolean;
    externalProfileUrl: string;
    scoreStats: ScoreStats;
    clans: string[];
    clanOrder: string;
    friends: Friend[];
    badges: Badge[];
    patreonFeatures: PatreonFeatures;
    profileSettings: ProfileSettings;
    changes: Change4[];
    history: History[];
    eventsParticipating: EventsParticipating[];
    socials: Social[];
    achievements: Achievement[];
    contextExtensions: ContextExtension[];
}

interface ContextExtension2 {
    id: number;
    playerId: string;
    player: Player2;
    leaderboardId: string;
    leaderboard: string;
    weight: number;
    rank: number;
    baseScore: number;
    modifiedScore: number;
    accuracy: number;
    pp: number;
    passPP: number;
    accPP: number;
    techPP: number;
    bonusPp: number;
    modifiers: string;
    timeset: number;
    priority: number;
    scoreId: number;
    score: string;
    qualification: boolean;
    banned: boolean;
    context: number;
    scoreImprovement: ScoreImprovement;
}

interface Score2 {
    id: number;
    baseScore: number;
    modifiedScore: number;
    accuracy: number;
    playerId: string;
    pp: number;
    bonusPp: number;
    passPP: number;
    accPP: number;
    techPP: number;
    qualification: boolean;
    weight: number;
    rank: number;
    countryRank: number;
    replay: string;
    modifiers: string;
    badCuts: number;
    missedNotes: number;
    bombCuts: number;
    wallsHit: number;
    pauses: number;
    fullCombo: boolean;
    maxCombo: number;
    fcAccuracy: number;
    fcPp: number;
    hmd: number;
    controller: number;
    accRight: number;
    accLeft: number;
    timeset: string;
    timepost: number;
    platform: string;
    player: Player2;
    validContexts: number;
    contextExtensions: ContextExtension2[];
    leaderboardId: string;
    leaderboard: string;
    authorizedReplayWatched: number;
    anonimusReplayWatched: number;
    replayOffsetsId: number;
    replayOffsets: Offsets;
    country: string;
    maxStreak: number;
    playCount: number;
    leftTiming: number;
    rightTiming: number;
    priority: number;
    scoreImprovementId: number;
    scoreImprovement: ScoreImprovement;
    banned: boolean;
    suspicious: boolean;
    bot: boolean;
    ignoreForStats: boolean;
    migrated: boolean;
    rankVoting: RankVoting;
    metadata: Metadata;
}

interface LeaderboardGroup2 {
    id: number;
    leaderboards: string[];
}

interface PlayerStat {
    id: number;
    playerId: string;
    type: number;
    timeset: number;
    time: number;
    score: number;
    replay: string;
    leaderboardId: string;
    leaderboard: string;
    scoreId: number;
    baseScore: number;
    modifiedScore: number;
    accuracy: number;
    pp: number;
    bonusPp: number;
    passPP: number;
    accPP: number;
    techPP: number;
    qualification: boolean;
    weight: number;
    rank: number;
    countryRank: number;
    modifiers: string;
    badCuts: number;
    missedNotes: number;
    bombCuts: number;
    wallsHit: number;
    pauses: number;
    fullCombo: boolean;
    maxCombo: number;
    fcAccuracy: number;
    fcPp: number;
    hmd: number;
    controller: number;
    accRight: number;
    accLeft: number;
    timepost: number;
    platform: string;
    authorizedReplayWatched: number;
    anonimusReplayWatched: number;
    replayOffsetsId: number;
    replayOffsets: Offsets;
    country: string;
    maxStreak: number;
    leftTiming: number;
    rightTiming: number;
    priority: number;
    scoreImprovementId: number;
    scoreImprovement: ScoreImprovement;
}

interface Event {
    id: number;
    name: string;
    endDate: number;
    playlistId: number;
    image: string;
    leaderboards: string[];
    players: EventsParticipating[];
}

interface ClanRanking {
    id: number;
    clanId: number;
    clan: string;
    lastUpdateTime: number;
    averageRank: number;
    pp: number;
    averageAccuracy: number;
    totalScore: number;
    leaderboardId: string;
    leaderboard: string;
}

interface CapturedLeaderboard {
    id: string;
    songId: string;
    song: Song;
    difficulty: Difficulty;
    scores: Score2[];
    contextExtensions: ContextExtension2[];
    qualification: Qualification;
    reweight: Reweight;
    timestamp: number;
    leaderboardGroup: LeaderboardGroup2;
    changes: Change[];
    playerStats: PlayerStat[];
    events: Event[];
    plays: number;
    playCount: number;
    positiveVotes: number;
    starVotes: number;
    negativeVotes: number;
    voteStars: number;
    clanId: number;
    clan: string;
    clanRanking: ClanRanking[];
    clanRankingContested: boolean;
}

interface Playlist {
    id: number;
    isShared: boolean;
    link: string;
    ownerId: string;
    hash: string;
}

interface Request {
    id: string;
    player: Player2;
    clanRequest: string[];
    bannedClans: string[];
    playlists: Playlist[];
}

interface Clan2 {
    id: number;
    name: string;
    color: string;
    icon: string;
    tag: string;
    leaderID: string;
    description: string;
    bio: string;
    playersCount: number;
    pp: number;
    averageRank: number;
    averageAccuracy: number;
    captureLeaderboardsCount: number;
    rankedPoolPercentCaptured: number;
    capturedLeaderboards: CapturedLeaderboard[];
    players: Player2[];
    requests: Request[];
    banned: Request[];
}

export interface BLLeaderboardId {
    id: string;
    song: Song;
    difficulty: Difficulty;
    scores: Score[];
    changes: Change[];
    qualification: Qualification;
    reweight: Reweight;
    leaderboardGroup: LeaderboardGroup[];
    plays: number;
    clan: Clan2;
    clanRankingContested: boolean;
}

export interface BLLeaderboardIdOptions {
    page?: number;
    count?: number;
    sortBy?: string;
    order?: 0 | 1;
    scoreStatus?: 0 | 1;
    leaderboardContext?: 0 | 2 | 4 | 8 | 16;
    countries?: string;
    search?: string;
    modifiers?: string;
}
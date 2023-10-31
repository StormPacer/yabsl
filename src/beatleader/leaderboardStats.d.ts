interface HitTracker {
    maxCombo: number;
    maxStreak: number;
    leftTiming: number;
    rightTiming: number;
    leftMiss: number;
    rightMiss: number;
    leftBadCuts: number;
    rightBadCuts: number;
    leftBombs: number;
    rightBombs: number;
}

interface AccuracyTracker {
    accRight: number;
    accLeft: number;
    leftPreswing: number;
    rightPreswing: number;
    averagePreswing: number;
    leftPostswing: number;
    rightPostswing: number;
    leftTimeDependence: number;
    rightTimeDependence: number;
    leftAverageCut: number[];
    rightAverageCut: number[];
    gridAcc: number[];
    fcAcc: number;
}

interface AverageHeadPosition {
    x: number;
    y: number;
    z: number;
}

interface WinTracker {
    won: boolean;
    endTime: number;
    nbOfPause: number;
    totalPauseDuration: number;
    jumpDistance: number;
    averageHeight: number;
    averageHeadPosition: AverageHeadPosition;
    totalScore: number;
    maxScore: number;
}

interface ScoreGraphTracker {
    graph: number[];
}

export interface BLLeaderboardStats {
    hitTracker: HitTracker;
    accuracyTracker: AccuracyTracker;
    winTracker: WinTracker;
    scoreGraphTracker: ScoreGraphTracker;
}
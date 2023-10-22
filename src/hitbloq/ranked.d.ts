interface Crcurve {
    points: number[][];
    type: string;
}

export interface MapPool {
    _id: string;
    accumulation_constant: number;
    banner_title_hide: boolean;
    cover: string;
    cr_curve: Crcurve;
    date_created: number;
    force_recalc: boolean;
    leaderboard_id_list: string[];
    long_description: string;
    needs_cr_total_recalc: boolean;
    owners: number[];
    player_count: number;
    playlist_cover: string;
    priority: number;
    short_description: string;
    shown_name: string;
    third_party: boolean;
    views: number;
}

interface Map {
    song_cover: string;
    song_difficulty: string;
    song_id: string;
    song_name: string;
    song_plays: number;
    song_stars: number;
}

export interface Maps {
    maps: Map[];
    last: boolean;
    next: number;
}
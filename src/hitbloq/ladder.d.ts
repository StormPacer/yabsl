export interface Player {
    banner_image: string | null;
    cr: number;
    custom_color: string,
    profile_pic: string,
    rank: number,
    rank_change: number,
    user: number,
    username: string,
}

export interface Ladder {
    players: Player[];
    last: boolean;
    next: number;
}
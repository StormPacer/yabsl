export interface BLPlaylist {
    id: number;
    isShared: boolean;
    link: string;
    ownerId: string;
    hash: string;
}

interface Difficulty {
    name: string;
    characteristic: string;
}

interface Song {
    hash: string;
    songName: string;
    difficulties: Difficulty[];
    levelAuthorName: string;
}

interface CustomData {
    syncURL: string;
    owner: string;
    id: string;
    hash: string;
    shared: boolean;
}

export interface BlFullPlaylist {
    playlistTitle: string;
    playlistAuthor: string;
    songs: Song[];
    image: string;
    customData: CustomData;
}
interface SongDetails {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    isrc: string;
    link: string;
    share: string;
    duration: number;
    album: Album;
}

interface Album {
    cover_medium: string;
}


export default SongDetails;
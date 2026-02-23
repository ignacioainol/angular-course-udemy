
interface AudioPlayer {
    volume: number; // 0 to 100
    second: number; // 0 to 3600
    song: string;
    details: Details;
}

interface Details {
    artist: string;
    album: string;
    year: number;

}

const audioPlayer: AudioPlayer = {
    volume: 90,
    second: 36,
    song: 'My Way',
    details: {
        artist: 'Frank Sinatra',
        album: 'My Way',
        year: 1969,
    }
}
const { details } = audioPlayer;
const { artist } = details;

console.log('Artist:', artist) 
// model.js

export class Song {
    constructor(title, artist, audioSrc, img) {
        this.title = title;
        this.artist = artist;
        this.audioSrc = audioSrc; // Agregar la referencia al archivo de audio
        this.img = img;
    }
}

export class Playlist {
    constructor() {
        this.currentSong = null;
        this.head = null;
        this.volume = 50;
        this.songs = [
            new Song('01', 'TR0Y', 'Album/01.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('02', 'TR0Y', 'Album/02.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('03', 'TR0Y', 'Album/03.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('04', 'TR0Y', 'Album/04.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('05', 'TR0Y', 'Album/05.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('06', 'TR0Y', 'Album/06.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('07', 'TR0Y', 'Album/07.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('08', 'TR0Y', 'Album/08.wav', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('09', 'TR0Y', 'Album/09.mp3', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('10', 'TR0Y', 'Album/10.mp3', 'Album/Imgs/ÁlbumPortada.png'),
            new Song('11', 'TR0Y', 'Album/11.wav', 'Album/Imgs/ÁlbumPortada.png'),
        ];

        this.createPlaylist();
    }

    createPlaylist() {
        let prev = null;
        this.songs.forEach((song) => {
            const newNode = { data: song, next: null, prev: prev };
            if (prev) {
                prev.next = newNode;
            } else {
                this.head = newNode;
            }
            prev = newNode;
        });
        // Conectar el último nodo con el primero para hacerlo circular
        prev.next = this.head;
        this.head.prev = prev;

        this.currentSong = this.head;
    }

    getCurrentSong() {
        return this.currentSong.data;
    }

    nextSong() {
        this.currentSong = this.currentSong.next;
    }

    prevSong() {
        this.currentSong = this.currentSong.prev;
    }

    setVolume(volume) {
        this.volume = volume;
    }
    
    getVolume() {
        return this.volume;
    }
}

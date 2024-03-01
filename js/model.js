// model.js

export class Song {
    constructor(title, artist, audioSrc) {
        this.title = title;
        this.artist = artist;
        this.audioSrc = audioSrc; // Agregar la referencia al archivo de audio
    }
}

export class Playlist {
    constructor() {
        this.currentSong = null;
        this.head = null;
        this.volume = 50;
        this.songs = [
            new Song('01', 'TR0Y', 'Album/01.wav'),
            new Song('02', 'TR0Y', 'Album/02.wav'),
            new Song('03', 'TR0Y', 'Album/03.wav'),
            new Song('04', 'TR0Y', 'Album/04.wav'),
            new Song('05', 'TR0Y', 'Album/05.wav'),
            new Song('06', 'TR0Y', 'Album/06.wav'),
            new Song('07', 'TR0Y', 'Album/07.wav'),
            new Song('08', 'TR0Y', 'Album/08.wav'),
            new Song('09', 'TR0Y', 'Album/09.mp3'),
            new Song('10', 'TR0Y', 'Album/10.mp3'),
            new Song('11', 'TR0Y', 'Album/11.wav'),
        ];

        this.createPlaylist();
    }

    createPlaylist() {
        let prev = null;
        this.songs.forEach((song, index) => {
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
        // Agregar lógica para ajustar el volumen del archivo de audio actual
        if (this.currentSong && this.currentSong.data.audio) {
            this.currentSong.data.audio.volume = volume / 100;
        }
    }

    getVolume() {
        return this.volume;
    }
}

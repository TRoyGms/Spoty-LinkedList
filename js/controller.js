// controller.js

class MusicController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.audioElement = new Audio();
        this.audioElement.addEventListener('ended', () => this.handleSongEnd());

        this.view.init(this);
    }

    initiatePlayback() {
        if (this.audioElement.paused) {
            this.playCurrentSong();
        } else {
            this.pauseCurrentSong();
        }
    }

    playPause() {
        if (this.audioElement.currentTime === 0) {
            this.playCurrentSong();
        } else {
            // Pausar o reanudar la reproducción
            if (this.audioElement.paused) {
                this.audioElement.play();
            } else {
                this.audioElement.pause();
            }
        }
    }
    

    playCurrentSong() {
        const currentSong = this.model.getCurrentSong();
        this.audioElement.src = currentSong.audioSrc;
        this.audioElement.volume = this.model.getVolume() / 100;
        this.audioElement.play().catch(error => {
            if (error.name === 'NotAllowedError') {
                console.error('Autoplay no permitido por el navegador. El usuario debe iniciar la reproducción.');
            } else {
                console.error('Error al intentar reproducir:', error);
            }
        });
        this.view.updateView();
    }

    pauseCurrentSong() {
        this.audioElement.pause();
    }

    handleSongEnd() {
        this.model.nextSong();
        this.playCurrentSong();
        this.view.updateView();
    }

    nextSong() {
        this.model.nextSong();
        this.playCurrentSong();
        this.view.updateView();
    }

    prevSong() {
        this.model.prevSong();
        this.playCurrentSong();
        this.view.updateView();
    }

    setVolume(volume) {
        this.model.setVolume(volume);
    }
}

export default MusicController;

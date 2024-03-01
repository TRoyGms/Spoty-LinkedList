// view.js

export default class MusicView {
    init(controller) {
        this.controller = controller;

        document.getElementById('backBtn').addEventListener('click', () => this.controller.prevSong());
        document.getElementById('playPauseBtn').addEventListener('click', () => this.controller.playPause());
        document.getElementById('nextBtn').addEventListener('click', () => this.controller.nextSong()); // Corregido aquí
        document.getElementById('volumeControl').addEventListener('input', (event) => this.controller.setVolume(event.target.value));

        this.progressBar = document.getElementById('progressBar');
        this.progressBar.addEventListener('input', (event) => this.handleProgressBarInput(event));

        this.updateView();
        this.updateProgressBar();
    }

    updateView() {
        const currentSong = this.controller.model.getCurrentSong();
        document.getElementById('songInfo').textContent = `${currentSong.title} - ${currentSong.artist}`;
    }

    updateProgressBar() {
        const currentTime = this.controller.audioElement.currentTime;
        const duration = this.controller.audioElement.duration;
        this.progressBar.value = (currentTime / duration) * 100;

        requestAnimationFrame(() => this.updateProgressBar());
    }

    handleProgressBarInput(event) {
        const newTime = (event.target.value / 100) * this.controller.audioElement.duration;
        this.controller.audioElement.currentTime = newTime;
    }
}

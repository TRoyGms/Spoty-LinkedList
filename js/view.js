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

        this.currentTimeElement = document.getElementById('currentTime');
        this.durationElement = document.getElementById('duration');

        this.updateView();
        this.updateProgressBar();
    }

    updateView() {
        const newImg = "./Album/Imgs/ÁlbumPortada.png";
        const imgSong = document.getElementById('imagen');
        imgSong.src = newImg;
        const currentSong2 = this.controller.model.getCurrentSong();
        document.getElementById('songInfo').textContent = `${currentSong2.title} - ${currentSong2.artist}`;
    }

    updateProgressBar() {
        const currentTime = this.controller.audioElement.currentTime;
        const duration = this.controller.audioElement.duration;

        this.progressBar.value = (currentTime / duration) * 100;

        const formattedCurrentTime = this.formatTime(currentTime);
        const formattedDuration = this.formatTime(duration);

        this.currentTimeElement.textContent = formattedCurrentTime;
        this.durationElement.textContent = formattedDuration;

        requestAnimationFrame(() => this.updateProgressBar());
    }

    formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
    }

    padZero(number) {
        return number < 10 ? `0${number}` : `${number}`;
    }

    handleProgressBarInput(event) {
        const newTime = (event.target.value / 100) * this.controller.audioElement.duration;
        this.controller.audioElement.currentTime = newTime;
    }
}

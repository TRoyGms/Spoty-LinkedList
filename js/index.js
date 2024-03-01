// index.js

import { Playlist } from '/js/model.js';
import MusicController from './controller.js';
import MusicView from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const playlist = new Playlist();
    const controller = new MusicController(playlist, new MusicView());
    // Agregar la siguiente línea para que el controlador se utilice
    window.controller = controller;
});





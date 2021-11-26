import './sass/index.scss';
import Game from './tools/Game.js';

const choices = document.querySelectorAll('.option')
const numbers = document.querySelectorAll('.number');
const input = document.querySelector('input');
const playBtn = document.querySelector('.play');
const resultInfo = document.querySelector('.resultInfo');
const noSelectedElement = document.querySelector('.noSelected')
const playerStartMoney = 100;
const game = new Game(choices,input,playBtn,playerStartMoney,noSelectedElement,numbers,resultInfo);
game.start();

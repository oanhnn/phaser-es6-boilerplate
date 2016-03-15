import BootState from './states/Boot';
import PreloadState from './states/Preload';
import GameState from './states/Game';

class Game extends Phaser.Game {

  constructor() {
    super(Game.WIDTH, Game.HEIGHT, Phaser.AUTO, 'content', null);
    this.state.add('Boot', BootState, false);
    this.state.add('Preload', PreloadState, false);
    this.state.add('Game', GameState, false);
    this.state.start('Boot');
  }

}

Game.WIDTH = 800;
Game.HEIGHT = 600;

new Game();

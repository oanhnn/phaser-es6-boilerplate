import RainbowText from '../objects/RainbowText';

class GameState extends Phaser.State {

  create() {
    let center = {x: this.world.centerX, y: this.world.centerY}
    let text = new RainbowText(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
    text.anchor.set(0.5);
  }
}

export default GameState;

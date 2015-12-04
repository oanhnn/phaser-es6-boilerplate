class BootState extends Phaser.State {

    init() {
        //  Unless you specifically know your game needs to support multi-touch
        //  I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus.
        //  You can disable that here:
        this.stage.disableVisibilityChange = false;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false);
        //this.scale.setResizeCallback(this.gameResized, this);
        //this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        //this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        Phaser.Canvas.setTouchAction(this.game.canvas, 'none');
        //this.game.input.touch.enabled = false;
        this.game.input.touch.preventDefault = true;
    }

    preload() {

    }

    create() {
        this.state.start('Preload');
    }

    gameResized() {}
    enterIncorrectOrientation() {}
    leaveIncorrectOrientation() {}
}

export default BootState;
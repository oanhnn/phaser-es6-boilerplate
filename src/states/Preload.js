class PreloadState extends Phaser.State {

    preload() {
        this.stage.backgroundColor = '#6d94b5';
        this.load.onFileComplete.add(this.onFileComplete, this);

        // Load all resource here
    }

    create() {
        this.state.start('Game');
    }

    onFileComplete(process, cacheKey, isSuccess, loadedFiles, totalFiles) {
        console.log(process, cacheKey, isSuccess, loadedFiles, totalFiles);
    }
}

export default PreloadState;
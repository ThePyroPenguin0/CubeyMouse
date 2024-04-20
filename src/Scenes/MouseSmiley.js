class MouseSmiley extends Phaser.Scene {
    constructor() {
        super("smileyScene");
        this.my = { sprite: {} };
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
    
        this.load.setPath("./assets/");
        this.load.image("yellowBody", "yellow_body_squircle.png");
        this.load.image("smile", "face_a.png");
        document.getElementById('description').innerHTML = '<h2>Smiley.js</h2>'
    }

    create() {
        this.input.on('pointerdown', function (pointer) {
            this.add.image(pointer.x, pointer.y, "yellowBody");
            this.add.image(pointer.x, pointer.y+20, "smile");
        }, this);
    }

    update() {
    }

}
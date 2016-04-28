
//new Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig)

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game', false, false);
var GAMEDEBUG=false;


game.state.add('Stage01', GameCtrl.Stage01);

game.state.start('Stage01');

function preload() {

    game.load.image('atari', 'assets/sprites/atari130xe.png');
    game.load.image('mushroom', 'assets/sprites/mushroom2.png');

}

 var sprite1;
    var sprite2;

function create() {
   

    game.stage.backgroundColor = '#2d2d2d';

    sprite1 = game.add.sprite(150, 300, 'atari');
    sprite1.name = 'atari';
    game.physics.enable(sprite1, Phaser.Physics.ARCADE);

    //  Here you can visually see the two bounding boxes the sprites are using for collision.

    sprite1.body.immovable = true;

    sprite2 = game.add.sprite(700, 320, 'mushroom');
    sprite2.name = 'mushroom';
    game.physics.enable(sprite2, Phaser.Physics.ARCADE);
   // sprite2.body.velocity.x = -100;

   cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    game.physics.arcade.collide(sprite1, sprite2, collisionHandler, null, this);

 sprite2.body.velocity.x = 0;
       if (cursors.left.isDown)
    {
        sprite2.body.velocity.x = -150; 
    }
    else if (cursors.right.isDown)
    {
        sprite2.body.velocity.x = 150;
    }

}

function collisionHandler (obj1, obj2) {

    game.stage.backgroundColor = '#992d2d';

}

function render() {

    game.debug.bodyInfo(sprite1, 32, 32);

    game.debug.body(sprite1);
    game.debug.body(sprite2);

}
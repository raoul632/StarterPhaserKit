var GameCtrl = {


};

(function(){
'use strict';
GameCtrl.Stage01 = function () {

        //        When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:
/*
    this.game;                //        a reference to the currently running game
    this.add;                //        used to add sprites, text, groups, etc
    this.camera;        //        a reference to the game camera
    this.cache;                //        the game cache
    this.input;                //        the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;                //        for preloading assets
    this.math;                //        lots of useful common math operations
    this.sound;                //        the sound manager - add a sound, play one, set-up markers, etc
    this.stage;                //        the game stage
    this.time;                //        the clock
    this.tweens;        //        the tween manager
    this.world;                //        the game world
    this.particles;        //        the particle manager
    this.physics;        //        the physics manager
    this.rnd;                //        the repeatable random number generator
*/
    //        You can use any of these from any function within this State.
    //        But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

};

GameCtrl.Stage01.prototype = {


 preload: function () {

 	   this.load.image('atari', 'assets/sprites/atari130xe.png');
       this.load.image('mushroom', 'assets/sprites/mushroom2.png');

},
  create: function () {

	var sprite1;
	var sprite2;

  	 this.game.stage.backgroundColor = '#2d2d2d';

    this.sprite1 = this.game.add.sprite(150, 300, 'atari');
    this.sprite1.name = 'atari';
    this.game.physics.enable(this.sprite1, Phaser.Physics.ARCADE);

    //  Here you can visually see the two bounding boxes the sprites are using for collision.

    this.sprite1.body.immovable = true;

    this.sprite2 = this.game.add.sprite(700, 320, 'mushroom');
    this.sprite2.name = 'mushroom';
    this.game.physics.enable(this.sprite2, Phaser.Physics.ARCADE);
   // sprite2.body.velocity.x = -100;

   this.cursors = game.input.keyboard.createCursorKeys();

  },

  update: function () {

    this.game.physics.arcade.collide(this.sprite1, this.sprite2, collisionHandler, null, this);
	this.sprite2.body.velocity.x = 0;

       if (this.cursors.left.isDown)
    {
        this.sprite2.body.velocity.x = -150; 
    }
    else if (this.cursors.right.isDown)
    {
        this.sprite2.body.velocity.x = 150;
    }



  }, 
  collisionHandler:function(obj1, obj2){
  	 this.game.stage.backgroundColor = '#992d2d';

  }, 
  render:function(){
  	 this.game.debug.bodyInfo(this.sprite1, 32, 32);

    this.game.debug.body(this.sprite1);
    this.game.debug.body(this.sprite2);
  }

};



}());
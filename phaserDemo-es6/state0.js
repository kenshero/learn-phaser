import game from './main'

import { initialKeyListener } from './utils'

const demo = {}
let player, speed = 4;

demo.state0 = function(){

};

demo.state0.prototype = {
  preload: function(){
    game.load.image('roboZ', 'assets/images/robo.png')
    game.load.image('background', 'assets/images/Sega-Game-Backgrounds.jpg')
    game.load.spritesheet('player', 'assets/images/spritePlayer.png', 250, 250)
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.world.setBounds(0, 0, 1100, 800);
    game.stage.backgroundColor = '#000'
    game.add.sprite(0, 0, 'background')
    player = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player')
    player.anchor.setTo(1, -1)
    player.scale.setTo(0.3)
    initialKeyListener(game)
    game.physics.enable(player)
    player.body.collideWorldBounds = true
    player.animations.add('walk', [0, 1, 2, 3, 4])

    game.camera.follow(player);
    // game.camera.deadzone = new Phaser.Rectangle(this.game.world.centerX - 300, this.game.world.centerY, 1000)
  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      player.x += speed
      player.scale.setTo(0.3, 0.3)
      if(player.x > 760) {
        player.x = 760
      }
      player.animations.play('walk', 14, true)
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      player.scale.setTo(-0.3, 0.3)
      player.x -= speed
      player.animations.play('walk', 14, true)
    }
    else {
      player.animations.stop('walk')
      player.frame = 0
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      player.y -= speed
      if(player.y < 190) {
        player.y = 190
      }
    }
    else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      player.y += speed
      if(player.y > 560) {
        player.y = 560
      }
    }
  }
}

export default demo

var accel = 400, platform, platformGroup;
demo.state5 = function(){};

demo.state5.prototype = {
  preload: function(){
    game.load.image('platform', 'assets/images/platform.png')
    game.load.image('adam', 'assets/images/adam.png')
  },
  create: function(){
    game.stage.backgroundColor = '#155cd8'
    initialKeyListener()

    player = game.add.sprite(500, 100, 'adam')
    platform = game.add.sprite(0, 500, 'platform')
    platformGroup = game.add.group()
    platformGroup.create(650, 200, 'platform')
    platformGroup.create(300, 200, 'platform')
    game.physics.enable([player, platform, platformGroup])
    player.scale.setTo(-0.5, 0.5)

    player.body.gravity.y = 500
    player.body.bounce.y = 0.3
    player.body.drag.x = 400
    player.body.collideWorldBounds = true

    platform.body.immovable = true
    platformGroup.setAll('body.immovable', true)
  },
  update: function(){
    game.physics.arcade.collide(player, [platform, platformGroup])
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      player.body.acceleration.x = -accel
      player.scale.setTo(-0.5, 0.5)
    } else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.scale.setTo(0.5, 0.5)
      player.body.acceleration.x = accel
    } else {
      player.body.acceleration.x = 0
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      player.body.velocity.y = -300
    }
  }
}

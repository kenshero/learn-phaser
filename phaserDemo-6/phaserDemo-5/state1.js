demo.state1 = function(){};
var cursors, vel = 300, rocks, grass;

demo.state1.prototype = {
  preload: function(){
    game.load.tilemap('field', 'assets/images/field.json', null, Phaser.Tilemap.TILED_JSON)
    game.load.image('grassTiles', 'assets/images/grassTiles.png')
    game.load.image('rockTiles', 'assets/images/rockTiles.png')
  },
  create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.stage.backgroundColor = '#1a2620'
    initialKeyListener()
    var map = game.add.tilemap('field')
    map.addTilesetImage('grassTiles')
    map.addTilesetImage('rockTiles')

    grass = map.createLayer('grass')
    rocks = map.createLayer('rocks')

    map.setCollisionBetween(1, 9, true, 'rocks')
    map.setCollision(11, true, 'grass')

    player = game.add.sprite(200, 200, 'player')
    player.scale.setTo(0.2)
    game.physics.enable(player)

    cursors = game.input.keyboard.createCursorKeys()
  },
  update: function(){
    game.physics.arcade.collide(player, rocks, function(){
      console.log("hit rock !");
    })
    game.physics.arcade.collide(player, grass, function(){
      console.log("hit grass !");
    })
    if(cursors.up.isDown) {
      player.body.velocity.y = -vel
    }
    else if(cursors.down.isDown){
      player.body.velocity.y = vel
    }
    else {
      player.body.velocity.y = 0
    }
    if(cursors.left.isDown) {
      player.body.velocity.x = -vel
    }
    else if(cursors.right.isDown){
      player.body.velocity.x = vel
    }
    else {
      player.body.velocity.x = 0
    }
  }
}

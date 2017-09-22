var barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;
demo.state2 = function(){};

demo.state2.prototype = {
  preload: function(){
    game.load.image('base', 'assets/images/cannonBase.png')
    game.load.image('barrel', 'assets/images/cannonBarrel.png')
    game.load.image('bullet', 'assets/images/bullet.png')
  },
  create: function(){
    game.stage.backgroundColor = '#4286f4'
    initialKeyListener()

    var base = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'base')
    base.anchor.setTo(0.5)
    base.scale.setTo(0.4)

    barrel = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'barrel')
    barrel.anchor.setTo(0.3, 0.5)
    barrel.scale.setTo(0.5)

    bullets = game.add.group()
    bullets.enableBody = true
    bullets.physicsBodyType = Phaser.Physics.ARCADE
    bullets.createMultiple(50, 'bullet')
    bullets.setAll('checkWorldBounds', true)
    bullets.setAll('outOfBoundsKill', true)
    bullets.setAll('anchor.y', 0.5)
    bullets.setAll('scale.x', 0.5)
    bullets.setAll('scale.y', 0.5)

    enemy = game.add.sprite(100, 200, 'player')
    game.physics.enable(enemy)

    enemyGroup = game.add.group()
    enemyGroup.enableBody = true
    enemyGroup.physicsBodyType = Phaser.Physics.ARCADE

    for(var i = 0; i < 3; i++) {
      enemyGroup.create(50, 100 * i + 100, 'player')
    }
    enemyGroup.setAll('anchor.y', 0.5)
    enemyGroup.setAll('anchor.x', 0.5)
    enemyGroup.setAll('scale.y', 0.2)
    enemyGroup.setAll('scale.x', 0.2)

  },
  update: function(){
    barrel.rotation = game.physics.arcade.angleToPointer(barrel)
    if(game.input.activePointer.isDown) {
      this.fire()
    }
    game.physics.arcade.overlap(bullets, enemy, this.hitEnemy)
    game.physics.arcade.overlap(bullets, enemyGroup, this.hitEnemyGroup)
  },
  fire: function(){
    console.log("firing");
    if(game.time.now > nextFire) {
      nextFire = game.time.now + fireRate
      bullet = bullets.getFirstDead()
      bullet.reset(barrel.x, barrel.y)

      game.physics.arcade.moveToPointer(bullet, velocity)
      bullet.rotation = game.physics.arcade.angleToPointer(bullet)
    }
  },
  hitEnemy: function(){
    console.log("hit")
    enemy.kill()
    bullet.kill()
  },
  hitEnemyGroup: function(bullet, enemy){
    console.log("hit enemy group")
    bullet.kill()
    enemy.kill()
  }
}

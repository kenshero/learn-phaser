var demo = {}, robo, speed = 4;
demo.state0 = function(){};

demo.state0.prototype = {
  preload: function(){
    game.load.image('roboZ', 'assets/images/robo.png')
    game.load.image('background', 'assets/images/Sega-Game-Backgrounds.jpg')
  },
  create: function(){
    console.log("state0");
    game.physics.startSystem(Phaser.Physics.ARCADE)
    game.world.setBounds(0, 0, 1100, 800);
    game.stage.backgroundColor = '#000'
    game.add.sprite(0, 0, 'background')
    robo = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'roboZ')
    robo.anchor.setTo(1, -1)
    robo.scale.setTo(0.3)
    initialKeyListener()
    game.physics.enable(robo)
    robo.body.collideWorldBounds = true
    game.camera.follow(robo);
    // game.camera.deadzone = new Phaser.Rectangle(this.game.world.centerX - 300, this.game.world.centerY, 1000)
  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      robo.x += speed
      if(robo.x > 760) {
        robo.x = 760
      }
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      robo.x -= speed
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      robo.y -= speed
      if(robo.y < 190) {
        robo.y = 190
      }
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      robo.y += speed
      if(robo.y > 560) {
        robo.y = 560
      }
    }
  }
}

function changeState(i, stateNum){
  console.log(i);
  game.state.start('state'+ stateNum)
}

function addKeyListener(key, fn, state){
  game.input.keyboard.addKey(key).onDown.add(
    fn,
    null,
    null,
    state
  )
}

function initialKeyListener(){
  addKeyListener(Phaser.Keyboard.ZERO, changeState, 0)
  addKeyListener(Phaser.Keyboard.ONE, changeState, 1)
  addKeyListener(Phaser.Keyboard.TWO, changeState, 2)
  addKeyListener(Phaser.Keyboard.THREE, changeState, 3)
  addKeyListener(Phaser.Keyboard.FOUR, changeState, 4)
  addKeyListener(Phaser.Keyboard.FIVE, changeState, 5)
  addKeyListener(Phaser.Keyboard.SIX, changeState, 6)
  addKeyListener(Phaser.Keyboard.SEVEN, changeState, 7)
  addKeyListener(Phaser.Keyboard.EIGHT, changeState, 8)
  addKeyListener(Phaser.Keyboard.NINE, changeState, 9)
}
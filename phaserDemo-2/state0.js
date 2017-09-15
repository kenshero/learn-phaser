var demo = {}, robo, speed = 2;
demo.state0 = function(){};

demo.state0.prototype = {
  preload: function(){
    game.load.image('roboZ', 'assets/images/robo.png')
  },
  create: function(){
    console.log("state0");
    game.stage.backgroundColor = '#3fcc6e'
    robo = game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'roboZ')
    robo.anchor.setTo(0.5)
    initialKeyListener()
  },
  update: function(){
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      robo.x += speed
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      robo.x -= speed
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      robo.y -= speed
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      robo.y += speed
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
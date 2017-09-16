demo.state6 = function(){};

demo.state6.prototype = {
  preload: function(){

  },
  create: function(){
    console.log("state6");
    game.stage.backgroundColor = '#aac9ff'
    initialKeyListener()
  },
  update: function(){

  }
}

function changeState(i, stateNum){
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
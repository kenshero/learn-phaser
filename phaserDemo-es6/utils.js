export const changeState = (i, stateNum, gameState) => {
  console.log('state :', stateNum);
  console.log('gameState :', gameState);
  gameState.state.start('state'+ stateNum)
}

export const addKeyListener = (gameState, key, fn, state) => {
  gameState.input.keyboard.addKey(key).onDown.add(
    fn,
    null,
    null,
    state,
    gameState
  )
}

export const initialKeyListener = (gameState) => {
  addKeyListener(gameState, Phaser.Keyboard.ZERO, changeState, 0)
  addKeyListener(gameState, Phaser.Keyboard.ONE, changeState, 1)
  addKeyListener(gameState, Phaser.Keyboard.TWO, changeState, 2)
  addKeyListener(gameState, Phaser.Keyboard.THREE, changeState, 3)
  addKeyListener(gameState, Phaser.Keyboard.FOUR, changeState, 4)
  addKeyListener(gameState, Phaser.Keyboard.FIVE, changeState, 5)
  addKeyListener(gameState, Phaser.Keyboard.SIX, changeState, 6)
  addKeyListener(gameState, Phaser.Keyboard.SEVEN, changeState, 7)
  addKeyListener(gameState, Phaser.Keyboard.EIGHT, changeState, 8)
  addKeyListener(gameState, Phaser.Keyboard.NINE, changeState, 9)
}

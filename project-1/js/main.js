var game = new Phaser.Game({ width: 640, height: 360, renderer: Phaser.AUTO, enableDebug: false})

var GameState = {
  // load the game assets before game start
  preload: function() {
    this.load.image('background', 'images/background-game.jpg')
  },
  // execute aftert everything is loaded
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background')
  },
  update: function() {

  }
}

game.state.add('GameState', GameState)
game.state.start('GameState')
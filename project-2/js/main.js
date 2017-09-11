var game = new Phaser.Game({ width: 640, height: 360, renderer: Phaser.AUTO, enableDebug: false})

var GameState = {
  // load the game assets before game start
  preload: function() {
    this.load.image('background', 'assets/images/background-game.jpg')
    this.load.image('knight', 'assets/images/knight.png')
  },
  // execute aftert everything is loaded
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background')
    this.knight = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'knight')
    this.knight.anchor.setTo(0.5)
  },
  // this is executed multiple time per second
  update: function() {

  }
}

game.state.add('GameState', GameState)
game.state.start('GameState')
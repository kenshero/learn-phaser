var game = new Phaser.Game({ width: 640, height: 360, renderer: Phaser.AUTO, enableDebug: false})

var GameState = {
  // load the game assets before game start
  preload: function() {
    this.load.image('background', 'assets/images/background-game.jpg')
    this.load.image('knight', 'assets/images/knight.png')
    this.load.image('wolf', 'assets/images/fenrir_wolf.png')
  },
  // execute aftert everything is loaded
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background')
    this.knight = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'knight')
    this.knight.anchor.setTo(0.5)
    this.knight.scale.setTo(0.5, 0.5)
    this.knight.angle = 45

    this.wolf = this.game.add.sprite(this.game.world.centerX - 200, this.game.world.centerY, 'wolf')
    this.wolf.anchor.setTo(0.5)
    this.wolf.scale.setTo(-1, -1)
  },
  // this is executed multiple time per second
  update: function() {
    this.knight.angle += 0.5
  }
}

game.state.add('GameState', GameState)
game.state.start('GameState')
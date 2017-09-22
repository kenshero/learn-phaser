var gameNav = new Phaser.Game({ width: 1000, height: 80, renderer: Phaser.AUTO, enableDebug: false})
var graphics, textTest;
var GameNavState = {
  // load the game assets before game start
  preload: function() {
  },
  // execute aftert everything is loaded
  create: function() {
    gameNav.stage.backgroundColor = '#fff'
    graphics = gameNav.add.graphics(0, 0);
    var xCir = 30
    this.changeNav(xCir, 0)
    textTest = gameNav.add.text(750, 10, "Camera Test", {fill: '#10ff10'})
  },
  // this is executed multiple time per second
  update: function() {
    var xCir = 30
    if(game.input.keyboard.isDown(Phaser.Keyboard.ZERO)){
      textTest.destroy();
      this.changeNav(xCir, 0)
      textTest = gameNav.add.text(750, 10, "Camera Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.ONE)){
      textTest.destroy();
      this.changeNav(xCir, 1)
      textTest = gameNav.add.text(750, 10, "Collision Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.TWO)){
      textTest.destroy();
      this.changeNav(xCir, 2)
      textTest = gameNav.add.text(750, 10, "Mous1e Overlap Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.THREE)){
      textTest.destroy();
      this.changeNav(xCir, 3)
      textTest = gameNav.add.text(750, 10, "Sound Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.FOUR)){
      textTest.destroy();
      this.changeNav(xCir, 4)
      textTest = gameNav.add.text(750, 10, "Tween Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.FIVE)){
      textTest.destroy();
      this.changeNav(xCir, 5)
      textTest = gameNav.add.text(750, 10, "Gravity Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.SIX)){
      textTest.destroy();
      this.changeNav(xCir, 6)
      textTest = gameNav.add.text(750, 10, "Time loop Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.SEVEN)){
      textTest.destroy();
      this.changeNav(xCir, 7)
      textTest = gameNav.add.text(750, 10, "Swipe Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.EIGHT)){
      textTest.destroy();
      this.changeNav(xCir, 8)
      textTest = gameNav.add.text(750, 10, "Text Test", {fill: '#10ff10'})

    } else if(game.input.keyboard.isDown(Phaser.Keyboard.NINE)){
      this.changeNav(xCir, 9)
      textTest = gameNav.add.text(750, 10, "Fucking Test", {fill: '#10ff10'})
    }
  },
  changeNav: function(xCir, currentState){
    for(var i=0; i<10; i++) {
      graphics.beginFill('0xe6fddf', 1)
      var color = "#000"
      if(i == currentState) {
        color = "#fff"
        graphics.beginFill('0x0f6bff', 1)
      }
      graphics.drawCircle(xCir, 30, 60)
      gameNav.add.text(xCir-7, 15, i, {fill: color});
      xCir += 75
    }
  }
}

gameNav.state.add('GameNavState', GameNavState)
gameNav.state.start('GameNavState')
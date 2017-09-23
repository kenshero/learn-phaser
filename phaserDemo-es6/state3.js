import game from './main'
import { initialKeyListener } from './utils'

const demo = {}
let sound
demo.state3 = function(){};

demo.state3.prototype = {
  preload: function(){
    game.load.image('button1', 'assets/images/button1.png')
    game.load.image('button2', 'assets/images/button2.png')
    game.load.image('button3', 'assets/images/button3.png')
    game.load.audio('pops', 'assets/sound/buttonPops.mp3')
  },
  create: function(){
    game.stage.backgroundColor = '#95a6c1'
    initialKeyListener(game)

    sound = game.add.audio('pops')
    sound.addMarker("low", 0, 0.5)
    sound.addMarker("high", 0.5, 1)

    var btn1 = game.add.button(100, 100, 'button1', function(){
      console.log("button1 Click !");
    })
    var btn2 = game.add.button(250, 250, 'button2', function(){
      console.log("button2 Click !");
    })
    var btn3 = game.add.button(450, 450, 'button3')

    btn1.onInputDown.add(this.tint, btn1)
    btn2.onInputDown.add(this.tint, btn2)
    btn3.onInputDown.add(this.tint, btn3)

    btn1.onInputUp.add(this.untint, btn1)
    btn2.onInputUp.add(this.untint, btn2)
    btn3.onInputUp.add(this.untint, btn3)
  },
  update: function(){

  },
  tint: function(){
    this.tint = 0xbbbbbb
    sound.play("low")
  },
  untint: function(){
    this.tint = 0xFFFFFF
    sound.play("high")
  }
}

export default demo
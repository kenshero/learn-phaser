import game from './main'
import { initialKeyListener } from './utils'


const demo = {}

demo.state9 = function(){};

demo.state9.prototype = {
  preload: function(){

  },
  create: function(){
    game.stage.backgroundColor = '#126323'
    initialKeyListener(game)
  },
  update: function(){

  }
}

export default demo
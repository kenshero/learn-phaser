import game from './main'
import { initialKeyListener } from './utils'

const demo = {}
demo.state6 = function(){};

demo.state6.prototype = {
  preload: function(){
    game.load.image('volcano', 'assets/images/volcano.png')
    game.load.image('redBall', 'assets/images/redBall.png')
    game.load.image('orBall', 'assets/images/orBall.png')
  },
  create: function(){
    game.stage.backgroundColor = '#aac9ff'
    initialKeyListener(game)

    var volcano = game.add.sprite(this.game.world.centerX - 150, 440, 'volcano')
    volcano.scale.setTo(0.6)
    volcano.anchor.setTo(0.5)
    var emitter = game.add.emitter(this.game.world.centerX - 150, 300, 2000)
    emitter.makeParticles(['redBall', 'orBall'], 0, 5000, false, true)
    emitter.maxParticleSpeed.set(300, -300)
    emitter.minParticleSpeed.set(-300, -100)
    emitter.gravity = 300

    game.time.events.add(2000, function(){
      emitter.start(false, 5000, 20)
      game.time.events.loop(500, function(){
        if(emitter.on){
          emitter.on = false
        } else {
          emitter.on = true
        }
      });
    });

  },
  update: function(){

  }
}

export default demo
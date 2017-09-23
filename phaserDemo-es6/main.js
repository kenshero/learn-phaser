import demo0 from './state0'
import demo1 from './state1'
import demo2 from './state2'
import demo3 from './state3'
import demo4 from './state4'
import demo5 from './state5'
import demo6 from './state6'
import demo7 from './state7'
import demo8 from './state8'
import demo9 from './state9'

const game = new Phaser.Game(800, 600, Phaser.AUTO)

game.state.add('state0', demo0.state0)
game.state.add('state1', demo1.state1)
game.state.add('state2', demo2.state2)
game.state.add('state3', demo3.state3)
game.state.add('state4', demo4.state4)
game.state.add('state5', demo5.state5)
game.state.add('state6', demo6.state6)
game.state.add('state7', demo7.state7)
game.state.add('state8', demo8.state8)
game.state.add('state9', demo9.state9)

game.state.start('state0')

export default game


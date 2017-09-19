demo.state4 = function(){};

demo.state4.prototype = {
  preload: function(){

  },
  create: function(){
    game.stage.backgroundColor = '#494d54'
    initialKeyListener()

    a1 = game.add.sprite(0, 100, 'player')
    a2 = game.add.sprite(150, 100, 'player')
    a3 = game.add.sprite(300, 100, 'player')
    a4 = game.add.sprite(450, 100, 'player')
    a5 = game.add.sprite(600, 100, 'player')

    game.add.tween(a1).to({y: '+400'}, 2000, 'Linear', true)
    i = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut')
    game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true)
    game.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, 2, true)
    game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true)

  },
  update: function(){

  }
}

demo.state9 = function(){};

demo.state9.prototype = {
  preload: function(){

  },
  create: function(){
    game.stage.backgroundColor = '#126323'
    game.add.text(100, 100, 'kenshero', {fontSize: '100px', fill:"#fff"})
    initialKeyListener()
  },
  update: function(){

  }
}

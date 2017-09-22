var text, sentence;

demo.state8 = function(){};

demo.state8.prototype = {
  preload: function(){

  },
  create: function(){
    game.stage.backgroundColor = '#4f8e5c'
    initialKeyListener()
    var text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    // game.add.text(100, 400, 'Hello World', {fontSize: '100px', fill: '#fff'})
    this.spellOutText(50, 100, 600, text, 30, 40, "#fff", 'Roboto Condensed')
  },
  update: function(){

  },
  spellOutText: function(x, y, width, text, fontSize, speed, fill, font){
    sentence = game.add.text(x, y, '', {fontSize: fontSize +'px', fill: fill, font: font})
    var currentLine = game.add.text(10, 10, '', {fontSize: fontSize +'px', font: font})
    var loop = game.time.events.loop(speed, addChar)
    var index = 0

    function addChar(){
      sentence.text += text[index]
      currentLine.text += text[index]

      if(currentLine.width > width){
        sentence.text += '\n'
        currentLine.text = ''
      }
      if(index >= text.length - 1){
        game.time.events.remove(loop)
        console.log("stop")
      }

      index++
    }
  }
}

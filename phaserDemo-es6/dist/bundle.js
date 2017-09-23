/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = __webpack_require__(2);

var _state2 = _interopRequireDefault(_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add('state0', _state2.default.state0);
// game.state.add('state1', demo.state1)
// game.state.add('state2', demo.state2)
// game.state.add('state3', demo.state3)
// game.state.add('state4', demo.state4)
// game.state.add('state5', demo.state5)
// game.state.add('state6', demo.state6)
// game.state.add('state7', demo.state7)
// game.state.add('state8', demo.state8)
// game.state.add('state9', demo.state9)

game.state.start('state0');

exports.default = game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(1);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
var player = void 0,
    speed = 4;

demo.state0 = function () {};

demo.state0.prototype = {
  preload: function preload() {
    _main2.default.load.image('roboZ', 'assets/images/robo.png');
    _main2.default.load.image('background', 'assets/images/Sega-Game-Backgrounds.jpg');
    _main2.default.load.spritesheet('player', 'assets/images/spritePlayer.png', 250, 250);
  },
  create: function create() {
    _main2.default.physics.startSystem(Phaser.Physics.ARCADE);
    _main2.default.world.setBounds(0, 0, 1100, 800);
    _main2.default.stage.backgroundColor = '#000';
    _main2.default.add.sprite(0, 0, 'background');
    player = _main2.default.add.sprite(this.game.world.centerX, this.game.world.centerY, 'player');
    player.anchor.setTo(1, -1);
    player.scale.setTo(0.3);
    initialKeyListener();
    _main2.default.physics.enable(player);
    player.body.collideWorldBounds = true;
    player.animations.add('walk', [0, 1, 2, 3, 4]);

    _main2.default.camera.follow(player);
    // game.camera.deadzone = new Phaser.Rectangle(this.game.world.centerX - 300, this.game.world.centerY, 1000)
  },
  update: function update() {
    if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.x += speed;
      player.scale.setTo(0.3, 0.3);
      if (player.x > 760) {
        player.x = 760;
      }
      player.animations.play('walk', 14, true);
    } else if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      player.scale.setTo(-0.3, 0.3);
      player.x -= speed;
      player.animations.play('walk', 14, true);
    } else {
      player.animations.stop('walk');
      player.frame = 0;
    }
    if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      player.y -= speed;
      if (player.y < 190) {
        player.y = 190;
      }
    } else if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      player.y += speed;
      if (player.y > 560) {
        player.y = 560;
      }
    }
  }
};

function changeState(i, stateNum) {
  console.log('state :', stateNum);
  _main2.default.state.start('state' + stateNum);
}

function addKeyListener(key, fn, state) {
  _main2.default.input.keyboard.addKey(key).onDown.add(fn, null, null, state);
}

function initialKeyListener() {
  addKeyListener(Phaser.Keyboard.ZERO, changeState, 0);
  addKeyListener(Phaser.Keyboard.ONE, changeState, 1);
  addKeyListener(Phaser.Keyboard.TWO, changeState, 2);
  addKeyListener(Phaser.Keyboard.THREE, changeState, 3);
  addKeyListener(Phaser.Keyboard.FOUR, changeState, 4);
  addKeyListener(Phaser.Keyboard.FIVE, changeState, 5);
  addKeyListener(Phaser.Keyboard.SIX, changeState, 6);
  addKeyListener(Phaser.Keyboard.SEVEN, changeState, 7);
  addKeyListener(Phaser.Keyboard.EIGHT, changeState, 8);
  addKeyListener(Phaser.Keyboard.NINE, changeState, 9);
}

exports.default = demo;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = __webpack_require__(2);

var _state2 = _interopRequireDefault(_state);

var _state3 = __webpack_require__(3);

var _state4 = _interopRequireDefault(_state3);

var _state5 = __webpack_require__(5);

var _state6 = _interopRequireDefault(_state5);

var _state7 = __webpack_require__(6);

var _state8 = _interopRequireDefault(_state7);

var _state9 = __webpack_require__(7);

var _state10 = _interopRequireDefault(_state9);

var _state11 = __webpack_require__(8);

var _state12 = _interopRequireDefault(_state11);

var _state13 = __webpack_require__(9);

var _state14 = _interopRequireDefault(_state13);

var _state15 = __webpack_require__(10);

var _state16 = _interopRequireDefault(_state15);

var _state17 = __webpack_require__(11);

var _state18 = _interopRequireDefault(_state17);

var _state19 = __webpack_require__(12);

var _state20 = _interopRequireDefault(_state19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new Phaser.Game(800, 600, Phaser.AUTO);

game.state.add('state0', _state2.default.state0);
game.state.add('state1', _state4.default.state1);
game.state.add('state2', _state6.default.state2);
game.state.add('state3', _state8.default.state3);
game.state.add('state4', _state10.default.state4);
game.state.add('state5', _state12.default.state5);
game.state.add('state6', _state14.default.state6);
game.state.add('state7', _state16.default.state7);
game.state.add('state8', _state18.default.state8);
game.state.add('state9', _state20.default.state9);

game.state.start('state0');

exports.default = game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

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
    (0, _utils.initialKeyListener)(_main2.default);
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

exports.default = demo;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
demo.state1 = function () {};
var cursors = void 0,
    vel = 300,
    rocks = void 0,
    grass = void 0,
    player = void 0;

demo.state1.prototype = {
  preload: function preload() {
    _main2.default.load.tilemap('field', 'assets/images/field.json', null, Phaser.Tilemap.TILED_JSON);
    _main2.default.load.image('grassTiles', 'assets/images/grassTiles.png');
    _main2.default.load.image('rockTiles', 'assets/images/rockTiles.png');
  },
  create: function create() {
    _main2.default.physics.startSystem(Phaser.Physics.ARCADE);
    _main2.default.stage.backgroundColor = '#1a2620';
    (0, _utils.initialKeyListener)(_main2.default);
    var map = _main2.default.add.tilemap('field');
    map.addTilesetImage('grassTiles');
    map.addTilesetImage('rockTiles');

    grass = map.createLayer('grass');
    rocks = map.createLayer('rocks');

    map.setCollisionBetween(1, 9, true, 'rocks');
    map.setCollision(11, true, 'grass');

    player = _main2.default.add.sprite(200, 200, 'player');
    player.scale.setTo(0.2);
    _main2.default.physics.enable(player);

    cursors = _main2.default.input.keyboard.createCursorKeys();
  },
  update: function update() {
    _main2.default.physics.arcade.collide(player, rocks, function () {
      console.log("hit rock !");
    });
    _main2.default.physics.arcade.collide(player, grass, function () {
      console.log("hit grass !");
    });
    if (cursors.up.isDown) {
      player.body.velocity.y = -vel;
    } else if (cursors.down.isDown) {
      player.body.velocity.y = vel;
    } else {
      player.body.velocity.y = 0;
    }
    if (cursors.left.isDown) {
      player.scale.setTo(-0.2, 0.2);
      player.body.velocity.x = -vel;
    } else if (cursors.right.isDown) {
      player.scale.setTo(0.2, 0.2);
      player.body.velocity.x = vel;
    } else {
      player.body.velocity.x = 0;
    }
  }
};

exports.default = demo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeState = exports.changeState = function changeState(i, stateNum, gameState) {
  console.log('state :', stateNum);
  console.log('gameState :', gameState);
  gameState.state.start('state' + stateNum);
};

var addKeyListener = exports.addKeyListener = function addKeyListener(gameState, key, fn, state) {
  gameState.input.keyboard.addKey(key).onDown.add(fn, null, null, state, gameState);
};

var initialKeyListener = exports.initialKeyListener = function initialKeyListener(gameState) {
  addKeyListener(gameState, Phaser.Keyboard.ZERO, changeState, 0);
  addKeyListener(gameState, Phaser.Keyboard.ONE, changeState, 1);
  addKeyListener(gameState, Phaser.Keyboard.TWO, changeState, 2);
  addKeyListener(gameState, Phaser.Keyboard.THREE, changeState, 3);
  addKeyListener(gameState, Phaser.Keyboard.FOUR, changeState, 4);
  addKeyListener(gameState, Phaser.Keyboard.FIVE, changeState, 5);
  addKeyListener(gameState, Phaser.Keyboard.SIX, changeState, 6);
  addKeyListener(gameState, Phaser.Keyboard.SEVEN, changeState, 7);
  addKeyListener(gameState, Phaser.Keyboard.EIGHT, changeState, 8);
  addKeyListener(gameState, Phaser.Keyboard.NINE, changeState, 9);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
var barrel = void 0,
    bullets = void 0,
    velocity = 1000,
    nextFire = 0,
    fireRate = 200,
    enemy = void 0,
    bullet = void 0,
    enemyGroup = void 0;
demo.state2 = function () {};

demo.state2.prototype = {
  preload: function preload() {
    _main2.default.load.image('base', 'assets/images/cannonBase.png');
    _main2.default.load.image('barrel', 'assets/images/cannonBarrel.png');
    _main2.default.load.image('bullet', 'assets/images/bullet.png');
  },
  create: function create() {
    _main2.default.stage.backgroundColor = '#4286f4';
    (0, _utils.initialKeyListener)(_main2.default);

    var base = _main2.default.add.sprite(this.game.world.centerX, this.game.world.centerY, 'base');
    base.anchor.setTo(0.5);
    base.scale.setTo(0.4);

    barrel = _main2.default.add.sprite(this.game.world.centerX, this.game.world.centerY, 'barrel');
    barrel.anchor.setTo(0.3, 0.5);
    barrel.scale.setTo(0.5);

    bullets = _main2.default.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('anchor.y', 0.5);
    bullets.setAll('scale.x', 0.5);
    bullets.setAll('scale.y', 0.5);

    enemy = _main2.default.add.sprite(100, 200, 'player');
    _main2.default.physics.enable(enemy);

    enemyGroup = _main2.default.add.group();
    enemyGroup.enableBody = true;
    enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 3; i++) {
      enemyGroup.create(50, 100 * i + 100, 'player');
    }
    enemyGroup.setAll('anchor.y', 0.5);
    enemyGroup.setAll('anchor.x', 0.5);
    enemyGroup.setAll('scale.y', 0.2);
    enemyGroup.setAll('scale.x', 0.2);
  },
  update: function update() {
    barrel.rotation = _main2.default.physics.arcade.angleToPointer(barrel);
    if (_main2.default.input.activePointer.isDown) {
      this.fire();
    }
    _main2.default.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
    _main2.default.physics.arcade.overlap(bullets, enemyGroup, this.hitEnemyGroup);
  },
  fire: function fire() {
    console.log("firing");
    if (_main2.default.time.now > nextFire) {
      nextFire = _main2.default.time.now + fireRate;
      bullet = bullets.getFirstDead();
      bullet.reset(barrel.x, barrel.y);

      _main2.default.physics.arcade.moveToPointer(bullet, velocity);
      bullet.rotation = _main2.default.physics.arcade.angleToPointer(bullet);
    }
  },
  hitEnemy: function hitEnemy() {
    console.log("hit");
    enemy.kill();
    bullet.kill();
  },
  hitEnemyGroup: function hitEnemyGroup(bullet, enemy) {
    console.log("hit enemy group");
    bullet.kill();
    enemy.kill();
  }
};

exports.default = demo;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
var sound = void 0;
demo.state3 = function () {};

demo.state3.prototype = {
  preload: function preload() {
    _main2.default.load.image('button1', 'assets/images/button1.png');
    _main2.default.load.image('button2', 'assets/images/button2.png');
    _main2.default.load.image('button3', 'assets/images/button3.png');
    _main2.default.load.audio('pops', 'assets/sound/buttonPops.mp3');
  },
  create: function create() {
    _main2.default.stage.backgroundColor = '#95a6c1';
    (0, _utils.initialKeyListener)(_main2.default);

    sound = _main2.default.add.audio('pops');
    sound.addMarker("low", 0, 0.5);
    sound.addMarker("high", 0.5, 1);

    var btn1 = _main2.default.add.button(100, 100, 'button1', function () {
      console.log("button1 Click !");
    });
    var btn2 = _main2.default.add.button(250, 250, 'button2', function () {
      console.log("button2 Click !");
    });
    var btn3 = _main2.default.add.button(450, 450, 'button3');

    btn1.onInputDown.add(this.tint, btn1);
    btn2.onInputDown.add(this.tint, btn2);
    btn3.onInputDown.add(this.tint, btn3);

    btn1.onInputUp.add(this.untint, btn1);
    btn2.onInputUp.add(this.untint, btn2);
    btn3.onInputUp.add(this.untint, btn3);
  },
  update: function update() {},
  tint: function tint() {
    this.tint = 0xbbbbbb;
    sound.play("low");
  },
  untint: function untint() {
    this.tint = 0xFFFFFF;
    sound.play("high");
  }
};

exports.default = demo;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
var a1 = void 0,
    a2 = void 0,
    a3 = void 0,
    a4 = void 0,
    a5 = void 0,
    i = void 0;
demo.state4 = function () {};

demo.state4.prototype = {
  preload: function preload() {},
  create: function create() {
    _main2.default.stage.backgroundColor = '#494d54';
    (0, _utils.initialKeyListener)(_main2.default);

    a1 = _main2.default.add.sprite(0, 100, 'player');
    a2 = _main2.default.add.sprite(150, 100, 'player');
    a3 = _main2.default.add.sprite(300, 100, 'player');
    a4 = _main2.default.add.sprite(450, 100, 'player');
    a5 = _main2.default.add.sprite(600, 100, 'player');

    _main2.default.add.tween(a1).to({ y: '+400' }, 2000, 'Linear', true);
    i = _main2.default.add.tween(a2).to({ x: 100, y: 0 }, 1000, 'Elastic.easeOut');
    _main2.default.add.tween(a3).from({ y: 1000 }, 1500, 'Circ.easeOut', true);
    _main2.default.add.tween(a4.anchor).to({ x: 1 }, 1000, 'Linear', true, 1000, 2, true);
    _main2.default.add.tween(a5).to({ alpha: 0 }, 1000, 'Bounce', true);
  },
  update: function update() {}
};

exports.default = demo;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accel = 400,
    platform = void 0,
    platformGroup = void 0,
    player = void 0;
var demo = {};
demo.state5 = function () {};

demo.state5.prototype = {
  preload: function preload() {
    _main2.default.load.image('platform', 'assets/images/platform.png');
    _main2.default.load.image('adam', 'assets/images/adam.png');
  },
  create: function create() {
    _main2.default.stage.backgroundColor = '#155cd8';
    (0, _utils.initialKeyListener)(_main2.default);

    player = _main2.default.add.sprite(500, 100, 'adam');
    platform = _main2.default.add.sprite(0, 500, 'platform');
    platformGroup = _main2.default.add.group();
    platformGroup.create(650, 200, 'platform');
    platformGroup.create(300, 200, 'platform');
    _main2.default.physics.enable([player, platform, platformGroup]);
    player.scale.setTo(-0.5, 0.5);

    player.body.gravity.y = 500;
    player.body.bounce.y = 0.3;
    player.body.drag.x = 400;
    player.body.collideWorldBounds = true;

    platform.body.immovable = true;
    platformGroup.setAll('body.immovable', true);
  },
  update: function update() {
    _main2.default.physics.arcade.collide(player, [platform, platformGroup]);
    if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      player.body.acceleration.x = -accel;
      player.scale.setTo(-0.5, 0.5);
    } else if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      player.scale.setTo(0.5, 0.5);
      player.body.acceleration.x = accel;
    } else {
      player.body.acceleration.x = 0;
    }
    if (_main2.default.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      player.body.velocity.y = -300;
    }
  }
};

exports.default = demo;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
demo.state6 = function () {};

demo.state6.prototype = {
  preload: function preload() {
    _main2.default.load.image('volcano', 'assets/images/volcano.png');
    _main2.default.load.image('redBall', 'assets/images/redBall.png');
    _main2.default.load.image('orBall', 'assets/images/orBall.png');
  },
  create: function create() {
    _main2.default.stage.backgroundColor = '#aac9ff';
    (0, _utils.initialKeyListener)(_main2.default);

    var volcano = _main2.default.add.sprite(this.game.world.centerX - 150, 440, 'volcano');
    volcano.scale.setTo(0.6);
    volcano.anchor.setTo(0.5);
    var emitter = _main2.default.add.emitter(this.game.world.centerX - 150, 300, 2000);
    emitter.makeParticles(['redBall', 'orBall'], 0, 5000, false, true);
    emitter.maxParticleSpeed.set(300, -300);
    emitter.minParticleSpeed.set(-300, -100);
    emitter.gravity = 300;

    _main2.default.time.events.add(2000, function () {
      emitter.start(false, 5000, 20);
      _main2.default.time.events.loop(500, function () {
        if (emitter.on) {
          emitter.on = false;
        } else {
          emitter.on = true;
        }
      });
    });
  },
  update: function update() {}
};

exports.default = demo;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
var arrow,
    startPointX,
    startPointY,
    endPointX,
    endPointY,
    swipeDirection,
    leeway = 10;

demo.state7 = function () {};

demo.state7.prototype = {
  preload: function preload() {
    _main2.default.load.image('arrow', 'assets/images/arrow.png');
  },
  create: function create() {
    _main2.default.stage.backgroundColor = '#5bea78';
    (0, _utils.initialKeyListener)(_main2.default);

    arrow = _main2.default.add.sprite(this.game.world.centerX - 120, 300, 'arrow');
    arrow.anchor.setTo(0.5);

    _main2.default.input.onDown.add(this.startSwipe);
    _main2.default.input.onUp.add(this.getSwipeDirection);
  },
  update: function update() {},
  startSwipe: function startSwipe() {
    startPointX = _main2.default.input.x;
    startPointY = _main2.default.input.y;
  },
  getSwipeDirection: function getSwipeDirection() {
    endPointX = _main2.default.input.x;
    endPointY = _main2.default.input.y;

    if (Math.abs(endPointY - startPointY) < leeway && Math.abs(endPointX - startPointX) < leeway) {
      return false;
    }

    if (Math.abs(endPointY - startPointY) < Math.abs(endPointX - startPointX)) {
      console.log('horizontal');
      if (endPointX > startPointX) {
        swipeDirection = 90;
      } else {
        swipeDirection = 270;
      }
    } else {
      console.log('vertical');
      if (endPointX > startPointX) {
        swipeDirection = 100;
      } else {
        swipeDirection = 0;
      }
    }

    arrow.angle = swipeDirection;
  }
};

exports.default = demo;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};
var text, sentence;
demo.state8 = function () {};

demo.state8.prototype = {
  preload: function preload() {},
  create: function create() {
    _main2.default.stage.backgroundColor = '#4f8e5c';
    (0, _utils.initialKeyListener)(_main2.default);
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    // game.add.text(100, 400, 'Hello World', {fontSize: '100px', fill: '#fff'})
    this.spellOutText(50, 100, 600, text, 30, 40, "#fff");
  },
  update: function update() {},
  spellOutText: function spellOutText(x, y, width, text, fontSize, speed, fill, font) {
    sentence = _main2.default.add.text(x, y, '', { fontSize: fontSize + 'px', fill: fill, font: font });
    var currentLine = _main2.default.add.text(10, 10, '', { fontSize: fontSize + 'px', font: font });
    var loop = _main2.default.time.events.loop(speed, addChar);
    var index = 0;

    function addChar() {
      sentence.text += text[index];
      currentLine.text += text[index];

      if (currentLine.width > width) {
        sentence.text += '\n';
        currentLine.text = '';
      }
      if (index >= text.length - 1) {
        _main2.default.time.events.remove(loop);
        console.log("stop");
      }

      index++;
    }
  }
};

exports.default = demo;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = {};

demo.state9 = function () {};

demo.state9.prototype = {
  preload: function preload() {},
  create: function create() {
    _main2.default.stage.backgroundColor = '#126323';
    (0, _utils.initialKeyListener)(_main2.default);
  },
  update: function update() {}
};

exports.default = demo;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
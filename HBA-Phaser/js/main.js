function init(){
	
}

function preload(){
  	game.load.image('background', 'images/background.png');
  	game.load.json('level:1', 'data/level01.json'); 
 }

function create(){
	game.add.image(0, 0, 'background');
	loadLevel(this.game.cache.getJSON('level:1'));
}

function update(){

}

function loadLevel(data){
	console.log(data);
}


//Create a game state
var game = new Phaser.Game(960, 600, Phaser.AUTO, 'game', {init: init, preload: preload, create: create, update: update});
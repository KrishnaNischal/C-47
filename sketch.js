var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var ryu, goku ,ryuK,ryuP,ryuR,ryuW,ryuJ,gokuW,gokuR,gokuP 

function preload(){
  ryuK = loadAnimation('./images/ryu kick.gif');
  ryuP = loadAnimation('./images/p1.gif','./images/p2.gif','./images/p3.gif','./images/p4.gif','./images/p5.gif');
  ryuR = loadAnimation('./images/ryu rest.gif');
  ryuW = loadAnimation('./images/ryu walk.gif');
  ryuJ = loadAnimation('./images/ryu jump.gif');
  gokuW = loadAnimation('./images/goku walk.gif');
  gokuR = loadAnimation('./images/goku rest.gif');
  gokuP = loadAnimation('./images/goku punch.gif');

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

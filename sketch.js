var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var playerName;
var distance = 0;
var database;

var form, player, game;

var ryu, ken ,ryuK,ryuP,ryuR,ryuW,ryuJ,kenW,kenR,kenP,kenJ,kenK;   

function preload(){
  ryuK = loadAnimation('./images/k1.gif','./images/k2.gif','./images/k3.gif','./images/k4.gif','./images/k5.gif','./images/k6.gif','./images/k7.gif','./images/k8.gif','./images/k9.gif','./images/k10.gif','./images/k11.gif','./images/k12.gif','./images/k13.gif','./images/k14.gif','./images/k15.gif');
  ryuP = loadAnimation('./images/p1.gif','./images/p2.gif','./images/p3.gif','./images/p4.gif','./images/p5.gif');
  ryuR = loadAnimation('./images/r1.gif','./images/r2.gif','./images/r3.gif','./images/r4.gif','./images/r5.gif','./images/r6.gif','./images/r7.gif','./images/r8.gif','./images/r9.gif','./images/r10.gif',);
  ryuW = loadAnimation('./images/d1.gif','./images/d2.gif','./images/d3.gif','./images/d4.gif','./images/d5.gif','./images/d6.gif');
  ryuJ = loadAnimation('./images/j1.gif','./images/j2.gif','./images/j3.gif','./images/j4.gif','./images/j5.gif','./images/j6.gif','./images/j7.gif','./images/j8.gif','./images/j9.gif','./images/j10.gif','./images/j11.gif','./images/j12.gif','./images/j13.gif','./images/j14.gif','./images/j15.gif','./images/j16.gif','./images/j17.gif','./images/j18.gif','./images/j19.gif','./images/j20.gif','./images/j21.gif','./images/j22.gif','./images/j23.gif');
  kenW = loadAnimation('./images/rd1.gif','./images/rd2.gif','./images/rd3.gif','./images/rd4.gif','./images/rd5.gif','./images/rd6.gif');
  kenR = loadAnimation('./images/rr1.gif','./images/rr2.gif','./images/rr3.gif','./images/rr4.gif','./images/rr5.gif','./images/rr6.gif','./images/rr7.gif','./images/rr8.gif','./images/rr9.gif','./images/rr10.gif');
  kenP = loadAnimation('./images/rp1.gif','./images/rp2.gif','./images/rp3.gif','./images/rp4.gif','./images/rp5.gif');
  kenJ = loadAnimation('./images/rj1.gif','./images/rj2.gif','./images/rj3.gif','./images/rj4.gif','./images/rj5.gif','./images/rj6.gif','./images/rj7.gif','./images/rj8.gif','./images/rj9.gif','./images/rj10.gif','./images/rj11.gif','./images/rj12.gif','./images/rj13.gif','./images/rj14.gif','./images/rj15.gif','./images/rj16.gif','./images/rj17.gif','./images/rj18.gif','./images/rj19.gif','./images/rj20.gif','./images/rj21.gif','./images/rj22.gif','./images/rj23.gif','./images/rj24.gif','./images/rj25.gif','./images/rj26.gif','./images/rj27.gif','./images/rj28.gif','./images/rj29.gif','./images/rj30.gif','./images/rj31.gif','./images/rj32.gif','./images/rj33.gif','./images/rj34.gif');
  kenK = loadAnimation('./images/rk1.gif','./images/rk2.gif','./images/rk3.gif','./images/rk4.gif','./images/rk5.gif','./images/rk6.gif','./images/rk7.gif','./images/rk8.gif','./images/rk9.gif','./images/rk10.gif','./images/rk11.gif');

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
function keyPressed(){
  console.log("keyPressed")
  console.log(keyCode);
  if(keyCode===75){
    ///console.log("keyCode");
    ryu.changeAnimation("kick",ryuK);
  }
}

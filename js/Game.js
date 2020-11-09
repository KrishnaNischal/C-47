class Game {
  constructor(){

  }   

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    });
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    ryu = createSprite(displayWidth/2+50,displayHeight/2+50);
    ryu.addAnimation("player1",ryuP);   
    goku = createSprite(displayWidth/2-50,displayHeight/2+50);
    goku.addAnimation("player2",gokuR);
   
  }

  play(){
    form.hide();
    if(allPlayers !== undefined){
      var index=0;
      var x;
      var y;

        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
        if(keyIsDown("k")){
          ryu.changeAnimation("kick",ryuK);
        }

      }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 4200){
      gameState = 2;
      player.rank+=1;
      Player.updateCarsAtEnd(player.rank);
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }
}


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

    ryu = createSprite(displayWidth/2+600,displayHeight/2+50);
    ryu.addAnimation("player1",ryuR);
    ryu.addAnimation("kick", ryuK) /// new animaiton
    ken = createSprite(displayWidth/2-600,displayHeight/2+50);
    ken.addAnimation("player2",kenR);
    playerName=[ryu,ken]
   
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var index=0;
      var x=displayWidth/2;
      var y=400;
     for(var plr in allPlayers){
         index=index+1;
         x=x+200

        // playerName[index-1].x=x
         //playerName[index-1].y=y
         if (index === player.index){
          textSize(30);
          fill("red");
          text(player.name,playerName[index-1].x,displayHeight/2+100);        
        }
      }
      if(keyIsDown("k")){
        console.log("Inside keypresed")
        ryu.changeAnimation("kick",ryuK);
      }
    console.log("we are here");
     
    if(keyIsDown(LEFT_ARROW)){
      ryuR.addAnimation("walk",ryuW);       
    };


        drawSprites();
      }
    }

      end(){
        console.log("Game Ended");
        console.log(player.rank);
      }
    }



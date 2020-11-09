class Player {
  constructor(){
    this.index = null;
    this.health = 200;
    this.name = null;
    this.rank = null;     
  }
 

  getCount(){
    var playerCountRef = database.ref('playerCount');           

    playerCountRef.on("value",(data)=>{   
      playerCount = data.val();
    })
  }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    updateCount(count){             
    database.ref('/').update({
      playerCount: count  
    });
  }      

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      health:this.health
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}

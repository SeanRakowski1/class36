class Game{
    constructor(){
    }

    getState(){
        //0->display Form (1) start game
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        
        database.ref('/').update({
            gameState:state
        })
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
}
class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef= database.ref('playerCount');
        playerCountRef.on("value",function(data){
            playerCount = data.val();  
        })
    }

 
    update(count){
        console.log("PlayerCount:"+count);
        database.ref('/').update({
            playerCount:count
        })
    }

    update(name){
        var playerIndex= "player"+playerCount;
        console.log(playerIndex);
        database.ref(playerIndex).set({
            name:name
        })
    }
}
class Form{
   constructor(){

   } 
   display(){
       var title = createElement('h2');
       title.html("Car Racing Game");
       title.position(150,0);

       var input = createInput("name");
       var button = createButton("Play");
       var greeting = createElement('h3');

       input.position(150, 150);
       button.position(250, 280);

       button.mousePressed(function(){
           input.hide();
           button.hide();

           var name = input.value();
           playerCount+=1;
           player.update(name);
           player.update(playerCount);

           greeting.html("Hello " +name);
           greeting.position(150, 100);
       })
   }
}
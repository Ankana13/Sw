class Game{
    constructor(){
 
    }
    start(){
       
            form = new Form();
            form.display();
          
        
            
    }
       play(){
            form.hide();
            console.log(gameState);
        bg.visible = true;
        counter = counter+1;
      
            boy.visible = true;
            boy.velocityY = boy.velocityY+0.5;
            if(keyDown("space")){
              boy.velocityY = -10;
         
            }
           
            boy.collide(earth);
            boy.debug = true;
            earth.visible = true;
            earth.debug = true;
            if(counter>250&& earth.width>=0){
                    earth.width = earth.width -2;
                    earth.height = earth.height -2;
            }
              
        //   image(s_img,0,0,displayWidth,displayHeight)
        // background(s_img);
          if(frameCount%120 === 0){
                  var r = Math.round(random(0,1))
         var paltform = createSprite(windowWidth,random(100,displayHeight),200,50);
         paltform.velocityX = -4;
         paltform.scale = 1.2;
         paltform.lifetime = width/4;
         
         if(r === 0){

                 paltform.addImage(p1);
         }
         if(r === 1){
                paltform.addImage(p2);
        }
          }
         
   drawSprites();
   text(counter,300,50);


        }
    
}
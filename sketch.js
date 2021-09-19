
var bg1,as,s;

var bg1_img,r_img,s_img;
var p1,p2
var gameState = 0;
var form,game,bg;
var boy,boyI;
var earth,eI;
var counter = 0;
function preload(){
  bg1_img = loadImage("G.jpg");
  s_img = loadImage("space2.jpg");
  p1 = loadImage("Obs.png");
  p2 = loadImage("Obs2.png");
  boyI = loadAnimation("b1.png","b2.png","b3.png");
  eI = loadImage("earth.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 // s = createSprite(0, 0, 400, 400);
game = new Game();
game.start();
 //s.addImage(s_img);
  bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
 bg.addImage(s_img);
// bg.scale = 25;
 bg.visible = false;
 boy = createSprite(100,100,100,100);
 boy.addAnimation("boyI",boyI);
 boy.visible = false;
 boy.setCollider("circle",0,0,100);
 boy.scale = 0.8;
 
 earth = createSprite(50,height-20,250,200);
 earth.addImage(eI);
 earth.scale = 1.2;
 earth.visible = false;
 earth.setCollider("rectangle",-150,100);
 
}

function draw() {
  background("black")
  if(gameState === 0){
    background(bg1_img); 
  }
 
 if(gameState === 1){
  // background(s_img);
   game.play();
 
 }
 console.log(gameState);
  drawSprites();
  textSize(30);
  text(counter,300,150);

}
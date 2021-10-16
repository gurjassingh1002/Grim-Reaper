var tower,towerimg
var door,doorimg,doorgroup
var climber,climberimg,climbergroup
var grim ,grimimg
var PLAY=1
var END=0
var gameState=PLAY
function preload(){
 towerimg=loadImage("tower.png")
 doorimg=loadImage("door.png")
 climberimg=loadImage("climber.png")
 grimimg=loadImage("ghost-standing.png")
}

function setup() {
  createCanvas(600, 600);
tower=createSprite(300,300)
tower.addImage("tower",towerimg)
tower.velocityY=1
doorgroup=new Group()
climbergroup=new Group()
grim=createSprite(200,200)
grim.addImage(grimimg)
grim.scale=0.4
}

function draw() {
  background(200);
  if (gameState===PLAY){
  if(tower.y>600){
  tower.y=300
  }
  if(keyDown(LEFT_ARROW)){
  grim.x-=3 
   }
  if(keyDown(RIGHT_ARROW)){
    grim.x+=3
  }
  if(keyDown("space")){
  grim.velocityY=-5
  }
  grim.velocityY+=0.8
  spawndoors()
  if(climbergroup.isTouching(grim)){
    grim.velocityY=0
  }
  if(grim.y>600||grim.y<0||grim.x<0||grim.x>600){
    gameState=END
  }
  drawSprites()
}
  if(gameState===END){
    textSize(40)
  text("GAME OVER!",180,300)  
  }
}
function spawndoors(){
  if(frameCount%200===0){
    door=createSprite(200,-50)
    door.addImage(doorimg)
    door.velocityY=1
    door.lifetime=800
    door.x=Math.round(random(120,400))
    doorgroup.add(door)

    climber=createSprite(200,10)
    climber.addImage(climberimg)
    climber.x=door.x
    climber.velocityY=1
    climber.lifetime=800
    climbergroup.add(climber)

    grim.depth=door.depth
    grim.depth+=1
   
  }
}
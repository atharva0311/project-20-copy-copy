var car , wall;
var speed , weight;
var carImage , wallImage

function preload()
{
  
}

function setup() 
{
  createCanvas(800,400);
 
   car = createSprite(100, 200, 50, 50);
   wall = createSprite (700,200,100,100)

}

function draw() {
  background(255,255,255);  
  drawSprites();
}
var bullet, wall, thickness;
var speed, weight;



function setup() {
  createCanvas(1600,400);
 bullet = createSprite(50, 200, 100, 30);
 bullet.shapeColor="white";
 thickness = random(22,83);
 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= "grey";

  speed = random(223,321);
  weight = random(30,52); 
  
 bullet.velocityX = speed; 
}

function draw() {
  background(0,0,0);


  if(wall.x - bullet.x <  (bullet.width + wall.width)/2){
   
   bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    console.log (damage);
  
 
  if (damage < 10){
   wall.shapeColor= "green";
  } 
 
  if  (damage > 10) {
   wall.shapeColor="red";
  }
} 
  drawSprites();
}
var fixed;
var move;





function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
 fixed.shapeColor= "green";
  move=createSprite(200,200,35,35);
  move.shapeColor="green";
}


function draw() {
  background(255,255,255);
  move.x= mouseX;
  move.y= mouseY;
 if(move.x-fixed.x<=(move.width+fixed.width)/2&&
 fixed.x-move.x<=(move.width+fixed.width)/2&&
 move.y-fixed.y<=(move.height+fixed.height)/2&&
 fixed.y-move.y<=(move.height+fixed.height)/2){
move.shapeColor="blue"
 fixed.shapeColor="yellow"
  
}
else{
move.shapeColor="green"
fixed.shapeColor="green"
}



drawSprites();
}
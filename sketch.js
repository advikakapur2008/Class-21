var car, tree;

function setup() {
  createCanvas(1200,800);
  tree = createSprite(600, 400, 50, 80);
  tree.shapeColor = "green";
  tree.debug = true;
  tree.velocityX = -3;

  car = createSprite(400,400,80,30);
  car.shapeColor = "green";
  car.debug = true;
  car.velocityX = 3;
}

function draw() {
  background(0,0,0);  
 bounceOff(car,tree)
 
  drawSprites();
}



var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bg,bgI;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("ufo.png")
	packageIMG=loadImage("alienPink.png")
	bgI=loadImage("bg.jpg")
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	bg=createSprite(400,250);
	bg.addImage(bgI);
	bg.scale=3;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.7;

	helicopterSprite=createSprite(width/2, 100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=1.2;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 110 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody, false);
  }
}




var aircraftIMG, aircraftSprite, goodsSprite,goodsIMG;
var goodsBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	aircraftIMG=loadImage("helicopter.png")
	goodsIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	goodsSprite=createSprite(width/2, 80, 10,10);
	goodsSprite.addImage(goodsIMG)
	goodsSprite.scale=0.5

	aircraftSprite=createSprite(width/2, 200, 10,10);
	aircraftSprite.addImage(aircraftIMG)
	aircraftSprite.scale=0.8

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	goodsBody = Bodies.circle(width/2 , 200 , 5 , {restitution :0.1,isStatic:true});
	World.add(world, goodsBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );


 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, [boxRightBody,boxLeftBody,boxBottomBody]);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  goodsSprite.x= goodsBody.position.x 
  goodsSprite.y= goodsBody.position.y 

  
  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {

    aircraftSprite.x=aircraftSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(goodsBody, translation)


  } else if (keyCode === RIGHT_ARROW) {
    aircraftSprite.x=aircraftSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(goodsBody, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(goodsBody,false);
    
  }
}




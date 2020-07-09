var ground,dustbin
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(800,670,1600,20)	;
	ball=new Paper(200,200,20);
	dustbin=new Bin(1200,650);
	
	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ground.display();
  ball.display();
  dustbin.display();
  
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:36,y:-36});
	}
}

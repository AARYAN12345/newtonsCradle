
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5
var roof
var rope1,rope2,rope3,rope4,rope5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     roof=new Roof(400,100,800,50)
	 ball1=new Ball(100,500)
	 ball2=new Ball(200,500)
	 ball3=new Ball(300,500)
     ball4=new Ball(400,500)
	 ball5=new Ball(500,500)
   rope1=new Rope(ball1.body,roof.body,55,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  drawSprites();
 
}




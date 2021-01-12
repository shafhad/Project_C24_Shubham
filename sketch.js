;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper = new Paper(100,300,100,{isStatic:true});
     dustbin = new Dustbin (720,390,100,10);
     ground = Bodies.rectangle(width / 2,400,width,10,{isStatic:true});
     World.add(world,ground);

}
function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  dustbin.display();
  

  drawSprites();
 
}

function keyPressed(){

  if (keyCode === UP_ARROW){
    Matter.body.apllyForce(paper.body,paper.body.position,{x:12,y:-13});
  }

}



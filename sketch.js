const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer_1;
var ground_1, rubber_1;
var stone_1;
var sand_1,sand_2,sand_3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground_1 = new Ground(400, 700, 810, 20);
	hammer_1 = new Hammer(300, 200, 100, 20);
	rubber_1 = new Rubber(400, 400, 20);
	stone_1 = new Stone(500, 500, 50,50);
	sand_1 = new Sand(200, 200);
	sand_2 = new Sand(180, 200);
	sand_3 = new Sand(220, 200);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer_1.display();
  ground_1.display();
  rubber_1.display();
  stone_1.display();
  sand_1.display();
  sand_2.display();
  sand_3.display();
  drawSprites();
 
}

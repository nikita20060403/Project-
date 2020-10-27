
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(500,350,20,20);
  
  Engine.run(engine);

}

function draw() {
  background(255,255,255);  

  box1.display();

  
  drawSprites();
}
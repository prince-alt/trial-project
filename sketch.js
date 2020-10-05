const engine = Matter.Engine;
const world = Matter.World;
const bodies = Matter.Bodies;

var engine1,world1,object1;

function setup() {
  createCanvas(800,400);

  engine1 = engine.create();
  world1 = engine1.world1;

  object1 = bodies.rectangle(200,400,50,50);
  world.add(world1,object1);
  
}

function draw() {
  background(255,0,0);  
  engine.update(engine1);
  rectMode(CENTER);
  rect(object1.position.x, object1.position.y, 50, 50);



}
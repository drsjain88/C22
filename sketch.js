const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ball;
var ground;

function setup() {
  createCanvas(400,400);
  ///createSprite();
  engine=Engine.create()
  world=engine.world

  var option={
 restitution:1
}

  ball=Bodies.circle(200,100,20,option)
  World.add(world,ball)
  console.log(ball)
  
  var ground_option={
    isStatic: true
  }

  ground=Bodies.rectangle(200,380,400,20,ground_option)
  World.add(world,ground)
}

function draw() {
  background(0); 
  Engine.update(engine) 
   rectMode(CENTER)
   rect(ground.position.x,ground.position.y,400,20)
   ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

}
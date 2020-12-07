const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies; 

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic :true
  }
  
  ground=Bodies.rectangle(200,390,200,20,ground_options);
  
  World.add(world,ground);

  var ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);
  
 // console.log(object);
 //console.log(object.type);
 //console.log(object.position.x);
 //console.log(object.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  fill ("brown") 
  rect(ground.position.x,ground.position.y,200,20);
   
  ellipseMode(RADIUS);
  fill("green")
  ellipse(ball.position.x,ball.position.y,20,20)
  
  drawSprites();
}
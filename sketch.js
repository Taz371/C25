//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;

var world, engine;

var b1;
var rotator, rotator2, rotator3, rotator4;
var angle = 60;

function setup() {
  createCanvas(400,400);
  
  //create the engine
  engine = Engine.create();
  //Add world to the engine
  world = engine.world;

   var ball_options = {
    restitution: 0.8,
    frictionAir:0.01,
  }
   
  var ground_options = {
     isStatic: true
  };

  b1 = createImg("up.png");
  b1.position(360,20);
  b1.size(30,30);
  b1.mouseClicked(thrust);

  rotator = new Ground(50, 320, 50, 30);
  rotator2 = new Ground(150, 320, 50, 30);
  rotator3 = new Ground(250, 320, 50, 30);
  rotator4 = new Ground(350, 320, 50, 30);
  
  //create a ground
  ground = Bodies.rectangle(0, 400, 1000, 100, ground_options);
  //add to world
  World.add(world,ground);

  ball = Bodies.circle(100,20,20,ball_options);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rotator.display();
  rotator2.display();
  rotator3.display();
  rotator4.display();

  fill("red");
  ellipse(ball.position.x,ball.position.y,20);

  //write a rectangle function to display ground.
  fill("blue");
  rect(ground.position.x,ground.position.y, 1000, 100);
}

function thrust()
{
  Matter.Body.applyForce(ball, {x:0,y:0}, {x:0,y:-0.04})
}


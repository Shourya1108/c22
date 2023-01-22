
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ground
var ball
var left,right,top1
var btn1,btn2
function setup()
{
  createCanvas(1600,700);       

  engine=Engine.create()
  world=engine.world

  btn1=createImg('right.png')
  btn1.position(220,30)
  btn1.size(50,50)
  btn1.mouseClicked(hForce)
  btn2=createImg('up.png')
  btn2.position(20,30)
  btn2.size(50,50)
  btn2.mouseClicked(vForce)

  /*var ops={isStatic:true}
ground=Bodies.rectangle(10,380,400,20,ops)
World.add(world,ground)*/

/*ground=new Ground(200,390,400,20)
left= new Ground(10,200,20,400)
right=new Ground(390,200,20,400)
top1= new Ground(200,10,396,20)*/
ground= new Ground(width/2,670,width,20)
left1=new Ground(1100,600,20,120)
right1=new Ground(1350,600,20,120)

var bops={restitution:0.3,isStatic:false, friction:0, density:1.2}
ball=Bodies.circle(100,10,20,bops)
World.add(world,ball)
rectMode(CENTER)
ellipseMode(RADIUS)
}

function draw() 
{
  background(180);

 //rect(ground.position.x,ground.position.y,400,20)
 ellipse(ball.position.x,ball.position.y,20)
 ground.show()
 left1.show()
right1.show()
//top1.show()
Engine.update(engine)
}

function hForce() {
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  }
  function keyPressed() {
    if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
    }
  }
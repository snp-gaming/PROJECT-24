const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone,rubber,iron;
//var stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone=new Stone(120,300,30,30);
    rubber= new Rubber(140,300,20);
    iron=new Iron(180,300,60,40);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   stone.display();
   rubber.display();
   iron.display();

    
 
}
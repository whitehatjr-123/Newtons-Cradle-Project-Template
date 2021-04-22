
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var rope1, rope2, rope3, rope4, rope5;
var bob1,  bob2,  bob3,  bob4,  bob5;

var world;


function setup() {
	createCanvas(800, 600);
	
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,250,230,20);
	
	bob1 = new Bob(320,575,20)
	bob2 = new Bob(360,575,20)
	
	rope1=new Rope(bob1.body,roof.body,-80, 0)
	rope2=new Rope(bob2.body,roof.body,-40, 0)
	
	Engine.run(engine);

	//Matter.Render helps us to see the hidden matter.js world
	var render = Matter.Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 600,
		  wireframes: false
		}
	  });
	  Matter.Render.run(render);
}


function draw() {
  background(230);

  roof.display();

  rope1.display();
  rope2.display();

  bob1.display();
  bob2.display();

}
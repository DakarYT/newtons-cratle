
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof = new Roof(400, 100, 400, 20)
    bobObject1 = new Bob(400,500,40)
	bobObject2 = new Bob(440,500,40)
	bobObject3 = new Bob(400,500,40)
	bobObject4 = new Bob(400,500,40)
	bobObject5 = new Bob(400,500,40)

	rope1 = new Rope(bobObject1.body, roof.body, 10)
	rope2 = new Rope(bobObject2.body, roof.body, -10)
	rope3 = new Rope(bobObject3.body, roof.body,20)
	rope4 = new Rope(bobObject4.body, roof.body,-20)
	rope5 = new Rope(bobObject5.body, roof.body,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

}




var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height, width, 20);

  //division objects
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight, k)
    );
  }

  //1st row
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }
  //2nd row
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  // 3rd row
  for (var j = 75; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  // 4th row
  for (var j = 50; j <= width - 10; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
  particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
}

function draw() {
  background(126, 66, 245);
  textSize(20);

  Engine.update(engine);
  ground.display();

  //display the plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (frameCount % 60 === 0) {
    particles.push(
      new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10)
    );
    // console.log(particles[0].body.velocity);
  }

  for (var a = 0; a < particles.length; a++) {
    p = particles[a];

    if (p) {
      p.display();

      // if (p.body.position.y > height - 100) {
      // p.remove();

      // for (var div_x = 0; div_x < divisions.length; div_x++) {
      //   if (
      //     divisions[div_x].body.position.x < p.body.position.x &&
      //     80 > p.body.position.x
      //   ) {
      //     print(divisions[div_x]);
      //     print(div_x + 1);
      //   }
      // }

      // delete particles[a];
      // }
    }
  }

  text("Score :", 20, 20);

  //display the paricles
}

function print(t) {
  console.log(t);
}

class Particle {
  constructor(x, y) {
    var options = {
      restitution: 1,
      friction: 0,
      isStatic: false,
    };
    this.boom = 0;
    this.r = 10;
    this.body = Bodies.circle(x, y, this.r, options);
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
    // console.log(this.color);

    World.add(world, this.body);
  }
  remove(boom) {
    World.remove(world, this.body);
    this.boom = boom;
  }
  doBoom() {
    if (this.boom > 0) {
      this.boom_x = 0;
      text("+" + this.boom, this.boom_x, this.boom_y);
    }
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}

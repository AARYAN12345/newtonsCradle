class Ball {
  constructor(x, y) {
    var options = {
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
    };
    this.radius = 55;
    this.body = Bodies.circle(x,y, this.radius,options); 
    World.add(world, this.body);
  };
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);  
    ellipse(this.image,0, 0, this.radius,this.radius);
    pop();
  }
};

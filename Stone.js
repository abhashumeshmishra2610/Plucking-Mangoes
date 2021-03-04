class Stone {
    constructor(x,y,r) {
       var options ={
           isStatic : false,
           restitution : 0,
           friction : 1,
           density : 1.2
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("stone.png");
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      image(this.image,this.x,this.y,this.radius,0);
      pop();
    }

}
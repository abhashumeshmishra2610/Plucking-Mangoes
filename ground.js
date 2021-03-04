class ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      stroke(227, 182, 115);
      fill(227, 182, 115);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }

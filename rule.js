class rule{
    constructor(x,y,width,height) {
      var options = {
          isStatic : false
      }
      this.body = Matter.Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/jh.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,0,0, this.width, this.height);
      pop();
    }
  }

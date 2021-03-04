const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plank;
var board,boardimg;
var boyimg,boy;
var tree1img,tree1;
var stone;
var slingShot;

function preload() {
    backgroundImg = loadImage("1361.jpg");
    boardimg = loadImage("jh.png");
    boyimg = loadImage("wr.png");
    stoneimg = loadImage("stone.png");
    treeimg = loadImage("tree.png");

}

function setup(){
    var canvas = createCanvas(1200,450);

    engine = Engine.create();
    world = engine.world;

    push();
    var options ={
        isStatic : true
    }
    boy = Bodies.rectangle(500,350,0,0,options);
    World.add(world,boy);
    pop();

    push();
    var options ={
        isStatic : true
    }
    tree1 = Bodies.rectangle(970,250,0,0,options);
    World.add(world,tree1);
    pop();

    ground1 = new ground(500,450,1500,30);
    ground1.visible = false;

    push();
    var options ={
        isStatic : true
    }
    board = Bodies.rectangle(200,380,10,10,options);
    World.add(world,board);
    pop();

    var options ={
        isStatic : true
    }
    informationplate1 = Bodies.rectangle(330,10,90,90,options);
    World.add(world,informationplate1);

    mango1 = new Mango(900,90,20);
    mango2 = new Mango(960,120,20);
    mango3 = new Mango(1020,90,20);
    mango4 = new Mango(1040,170,20);
    mango5 = new Mango(1110,205,20);
    mango6 = new Mango(860,190,20);
    mango7 = new Mango(805,150,20);
    mango8 = new Mango(935,210,20);
    stone = new Stone(0,0,20,options);
    
    slingShot = new Slingshot(stone.body,{x:461,y:270});
}

function draw(){
    rectMode(CENTER);
    background(backgroundImg);
    Engine.update(engine);
    //plank.display(); 

    ground1.display();

    push();
    imageMode(CENTER);
    image(treeimg,tree1.position.x,tree1.position.y,400,400);
    pop();

    push();
    imageMode(CENTER);
    image(boardimg,board.position.x,board.position.y,200,200);
    pop();

    fill("white");
    text("PLUCKING",200,360,50,50);
    text("MANGOES",200,400,50,50);

    push();
    imageMode(CENTER);
    image(boyimg,boy.position.x,boy.position.y,150,200);
    pop();

    push();
    strokeWeight(4);
    stroke("black");
    fill("black");
    slingShot.display();
    pop();

    //push();
    //imageMode(CENTER);
    //image(informationplate,informationplate1.position.x,informationplate1.position.y,660,60);
    //pop();

    push();
    fill("white");
    textSize(30);
    text("Press space bar to get a chance again",300,32);
    pop();

    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    stone.display();

    detectollision(stone,mango1);
    detectollision(stone,mango2);
    detectollision(stone,mango3);
    detectollision(stone,mango4);
    detectollision(stone,mango5);
    detectollision(stone,mango6);
    detectollision(stone,mango7);
    detectollision(stone,mango8);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stone.body,{x:461,y:270});
        slingShot.attach(stone.body);
    }
}

function detectollision(lstone,lmango) {
    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false);
    }

}
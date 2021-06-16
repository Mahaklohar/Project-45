const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var back;
var bubble, bImage, bGroup;
var energy, eImage, eGroup;
var coin, cImage, cGroup


function preload(){
    back = loadImage("images/back.jpg");
    bImage = loadImage("images/bubble.png");
    eImage = loadImage("images/energy.png");
    cImage = loadImage("images/coin.png");


}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(600, 570, 1200, 50, ground_options);
    World.add(world, ground);

    steven = new Player(100, 450);

    bGroup = new Group();
    eGroup = new Group();
    cGroup = new Group();
    
   
}

function draw(){
    background(back);
    Engine.update(engine);
    
    steven.display();
    steven.reset()

    

    push();
    rectMode(CENTER);
    noFill();
    noStroke();
    rect(600, 570, 1200, 50);
    pop()

    drawSprites()

        if(keyDown(RIGHT_ARROW)){
           steven.plr.position.x += 2;
           console.log(steven.plr.position.y)
        }
        if(keyDown(LEFT_ARROW)){
            steven.plr.position.x -= 2;
        }
        if(keyWentDown(UP_ARROW) && steven.plr.position.y>450){
            steven.plr.position.y -= 15 ;
        }

        if(keyWentDown('E')){
            
            steven.shield();
        }

        if(bubble !== undefined && bubble.x >1200 && bubble.y>600 && steven.state === "offence"){
            console.log("Working, working, working..")
            steven.stopAttack()
           
        }
        
    spawnEnergy();
    spawnCoin();

}

function spawnBubble(){
    bubble = createSprite(300, 150, 100, 100);
    bubble.addImage("bubble",bImage);
    bubble.velocityX = 20;
    bubble.velocityY = 10;
    bubble.lifetime = 47
    bGroup.add(bubble);  
}

function mousePressed(){
    steven.attack();
    spawnBubble();
    console.log(steven.state); 
}

function spawnEnergy(){
    if(frameCount % 200 === 0){
        energy = createSprite(-10, Math.round(random(100, 200)), 50, 50);
        energy.velocityX = 3;
        energy.scale = 2
        energy.addImage("energy", eImage)
        eGroup.add(energy);
    }
}

function spawnCoin(){
    if(frameCount % 250 === 0){
        coin = createSprite(-10, Math.round(random(100, 200)), 50, 50);
        coin.velocityX = 3;
        coin.addImage("coin", cImage)
        cGroup.add(energy);
    }
}




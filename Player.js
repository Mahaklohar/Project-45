class Player{
    constructor(x, y){
        var option ={
            friction: 0.5,
            restitution:0
        }
        this.time1
        this.time2

        this.state

        this.plrImage = loadImage("images/steven1.png");
        this.plrShImg = loadImage("images/steven3.png") 
        this.shieldImg = loadImage("images/shield.png")
        this.plr = Bodies.rectangle(x, y, 100, 180, option);
        this.width = 100;
        this.height = 180;

        World.add(world, this.plr);
    }
    shield(){
        var rand = Math.round(random(1, 2));
        this.time1 = frameCount + 50;
        this.state = "defence"
        
        console.log(this.time1);

            if(rand === 1){
                this.plrImage = loadImage("images/steven.png")
                this.width = 190;
             }

           
               
            if(rand === 2){
                this.plrImage = this.plrShImg;
            }
            

            
        
    }
    reset(){
        if(frameCount === this.time1 || frameCount === this.time2){
            this.plrImage = loadImage("images/steven1.png");
            this.width = 100
        } 
    }

    attack(){
        this.state = "offence"
        this.plrImage = this.plrShImg;   
    }
    stopAttack(){
        this.plrImage = loadImage("images/steven1.png");
        this.width = 100
    }
    display(){
        var pos = this.plr.position;

        push();
        imageMode(CENTER);
        image(this.plrImage, pos.x, pos.y, this.width+ 20, this.height);
        pop();

        if(this.plrImage === this.plrShImg && this.state === "defence"){
            push();
            imageMode(CENTER);
            image(this.shieldImg, pos.x+200, pos.y-200, 500, 400)
            pop()
            
        }

        

    }
    
}
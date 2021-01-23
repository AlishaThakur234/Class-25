class ParentClass{
    constructor (x,y,w,h,angle){
        var properties = {
            restitution: 0.8,
            friction: 1
        }
        this.body = Bodies.rectangle (x,y,w,h,properties);
        World.add (world,this.body );
        
        this.image = loadImage ("sprites/bg.png");
        this.width = w;
        this.height = h;
    }

    display(){
    push ();
  //  strokeWeight (5)
  //  stroke("yellow")
    translate (this.body.position.x,this.body.position.y);
    rotate (this.body.angle);
   // rectMode(CENTER)
   // rect(0,0,70,70)
   imageMode (CENTER);
   image (this.image,0,0,this.width,this.height);
    pop ();

    }
}
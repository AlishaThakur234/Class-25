class Ground {
    constructor (x,y,w,h){
        var groundProp = {
            isStatic: true
        }
        this.body = Bodies.rectangle (x,y,w,h,groundProp);
        World.add (world,this.body );

        this.width = w;
        this.height = h;
        this.image = loadImage ("sprites/base.png")
    }

    display(){
    push ();
    // strokeWeight (5)
    // rectMode(CENTER)
    // stroke("brown") 
    // rect(this.body.position.x,this.body.position.y,this.width,this.height)
    imageMode (CENTER)
    image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    pop ();

    }
}
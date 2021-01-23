// class Log {
//     constructor (x,y,h,angle){
//         var logProp = {
//             restitution: 0.8,
//             friction: 1
//             //angle: angle
//         }
//         this.body = Bodies.rectangle (x,y,20,h,logProp);
//         World.add (world,this.body );
        
//         this.height = h;
//         Matter.Body.setAngle (this.body,angle)
//     }

//     display(){
//     push ();
//     strokeWeight (5)
//     stroke("orange")
//     translate (this.body.position.x,this.body.position.y)
//     rotate (this.body.angle)
//     rectMode(CENTER)
//     rect(0,0,20,this.height)
//     pop ();

//     }
// }

class Log extends ParentClass {

    constructor (x,y,h,a){
    super (x,y,20,h,a)
    Matter.Body.setAngle (this.body,a)
    this.image = loadImage ("sprites/wood2.png")
    }
}
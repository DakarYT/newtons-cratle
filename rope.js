class Rope{

    constructor(bodyA, bodyB, offsetX) {
        var options={
            bodyA: bodyA, 
            bodyB: bodyB,
            stiffness : 0.04,
            length : 200
            
        }   
        this.rope = Constraint.create(options) ;
        this.offsetX = offsetX
        World.add(world, this.rope);
      }
      display(){
       var pointA = this.rope.bodyA.position
       var pointB = this.rope.bodyB.position
var anchorPoint= pointB + this.offsetX 
fill(0)
stroke("pink")
      strokeWeight(4)
      line(pointA.x,pointA.y,anchorPoint,pointB.y)
  }
}
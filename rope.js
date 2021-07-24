class Rope{
  constructor (bodyA,bodyB){
     var option = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:50,
        stiffness:0.05
     }
     this.ring = Constraint.create(option)
     World.add(world,this.ring)
  }
  display(){
      var pointA = this.ring.bodyA.position
      var pointB = this.ring.bodyB.position
   line (pointA.x,pointA.y, pointB.x,pointB.y)
  }
}
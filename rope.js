class SlingShot{
    constructor(bodyA,pointB){

      var  Option ={
        bodyA:bodyA,
        pointB:pointB,
      }

      this.body=Constraint.create(Option);
      World.add(world,this.body);
      this.pointB=pointB; 

      
    }

    display(){

        var pointA= this.body.bodyA.position;
        var pointB= this.pointB

        stroke("lime");
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);

    }
}
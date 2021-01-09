class SlingShot{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,//bird.body
            pointB: point, //log6.body --> replace with a particular point (x,y)
            stiffness: 0.04,
            length: 30
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly() {
        this.sling.bodyA = null;

    }

}


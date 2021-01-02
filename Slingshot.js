class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 0.2
        }
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");

        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    release() {
        this.sling.bodyA = null;
    }

    attach(withWhat, what) {
        withWhat.bodyA = what;
    }

    // Creating separate display functions for each item for overlapping with each other and other objects outside this Slingshot world. Example - The Polygon will have to overlap sling1 as it would be between sling 1 and sling 2. It gives us knowledge about the order of how objects are placed. As, if the polygon would be behind both of the sling bars, it would not feel real as it can't go outside the catapult. This ordering gives us a real look.

    displayRightLine() {
        if (this.sling.bodyA) {
            push();
            // stroke("#301608");
            stroke(rgb(96, 45, 23));
            strokeWeight(7);
            if (this.sling.bodyA.position.x < 205) {
                line(this.sling.bodyA.position.x - 15, this.sling.bodyA.position.y, this.pointB.x + 15, this.pointB.y);
            }
            else {
                line(this.sling.bodyA.position.x + 15, this.sling.bodyA.position.y, this.pointB.x + 15, this.pointB.y);
            }
            pop();
        }
    }

    displayLeftLine() {
        if (this.sling.bodyA) {
            push();
            // stroke("#301608");
            stroke(rgb(96, 45, 23));
            strokeWeight(7);
            if (this.sling.bodyA.position.x < 205) {
                line(this.sling.bodyA.position.x - 15, this.sling.bodyA.position.y, this.pointB.x - 15, this.pointB.y);
            }
            else {
                line(this.sling.bodyA.position.x + 15, this.sling.bodyA.position.y, this.pointB.x - 15, this.pointB.y);
            }
            pop();
        }
    }

    displayImg1() {
        image(this.image1, this.sling.pointB.x + 10, this.sling.pointB.y + 55, (this.image1.width * 0.75), (this.image1.height * 0.75));
    }

    displayImg2() {
        image(this.image2, this.sling.pointB.x - 10, this.sling.pointB.y + 25, (this.image2.width * 0.75), (this.image2.height * 0.75));
    }

    displayImg3() {
        if (this.sling.bodyA) {
            if (this.sling.bodyA.position.x < 205) {
                image(this.image3, this.sling.bodyA.position.x - 25, this.sling.bodyA.position.y, 15, 30);
            }
            else {
                image(this.image3, this.sling.bodyA.position.x + 25, this.sling.bodyA.position.y, 15, 30);
            }
        }
    }
}
class Polygon {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.diameter = this.radius * 2;
        this.image = loadImage("sprites/polygon.png");
        this.options = {
            density: 0.8
        }
        this.body = Bodies.polygon(this.x, this.y, 6, this.radius, this.options);
        World.add(world, this.body);
        Body.setAngle(this.body, PI / 5);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        var imgSizeDimension = [this.diameter, this.diameter];
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0, 0, imgSizeDimension[0], imgSizeDimension[1]);
        stroke("red");
        strokeWeight(2);
        line(0, 0, 12.5, 12.5);
        pop();
    }
}
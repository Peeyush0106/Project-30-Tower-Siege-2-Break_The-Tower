class Platform {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.options = {
            density: 2,
            isStatic: true
        }
        this.body = Bodies.rectangle(this.x, this.y, width, height, this.options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(color) {
        var pos = this.body.position;
        push();
        if (color) {
            fill(color);
        }
        else{
            fill("brown");
        }
        rect(pos.x, pos.y, this.width, this.height);
        pop();
    }
}

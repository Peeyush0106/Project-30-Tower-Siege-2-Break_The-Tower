class Cup {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.options = {
            // isStatic: true,
            restitution: 0.2,
            density: 0.1
        }
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
        World.add(world, this.body);
        this.color = random(0, 255), random(0, 255), random(0, 255);
        this.RGBcolor = rgb(random(0, 255), random(0, 255), random(0, 255));

        this.image = loadImage("sprites/cup_1.png");

        this.vanished = false;
        this.visibility = 255;

        Body.setAngle(this.body, PI);
    }
    display() {
        fill(this.RGBcolor);
        if (!this.vanished) {
            push();
            tint(255, this.visibility);
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            image(this.image, 0, 0, this.width, this.height);
            // rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            this.visibility -= 10;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            tint(255, this.visibility);
            image(this.image, 0, 0, this.width, this.height);
            // rect(0, 0, this.width, this.height);
            pop();
        }
    }
    fadeAndVanish() {
        this.vanished = true;
    }
}
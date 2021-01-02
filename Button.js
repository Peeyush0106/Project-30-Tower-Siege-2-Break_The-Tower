class Button {
    constructor() {
        this.x = 750;
        this.y = 150;
        this.centerX = this.x + (this.width / 2);
        this.centerY = this.y + (this.height / 2);
        this.width = 120;
        this.height = 50;
        this.buttonEnable = true;
        this.visible = true;
    }
    display() {
        // fill(80, 80, 80);
        if (this.visible === true) {
            fill("darkblue");
            rect(this.x, this.y, this.width, this.height);
            fill("white");
            textSize(30);
            text("Start!", (this.x + 10), (((this.y + this.height / 2) + 10)));
        }
    }
    clicked() {
        if (mouseX >= (this.x) && mouseX <= (this.x + this.width)
            && mouseY >= (this.y) && mouseY <= (this.y + this.height)) {
            if (start.buttonEnable) {
                turbo.shouldMove = true;
                this.visible = false;
                this.buttonEnable = false;
                startGame = true;
            }
        }
    }
}
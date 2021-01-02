//In this game you have to shoot the cups and fall them off the tables. The game is simple. Just run this game, your will surely easily know what do you have to do in this. Hope you like it!

//Also see Commented Important.js to know what codes were commented and why are they important that they have been stored in a file. They mostly contain the codes that were used to add restart function.

// A gmes creator,
// Peeyush


//Define gloabally used variables and constants.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var leftCupsInRow;
var leftCupsInColumn;

var leftCups = [];
var rightCups = [];

var blocks, y_pos_spacer, x_pos_spacer, y_spaces, x_spaces;

var towerTable1, towerTable2, tower1, tower2;

var restartConditions;

var timesReset, score;

var canvasWidth, canvasHeight;

var myName;

// Function for setting up basic objects and property values.
function setup() {
    //Canvas
    canvasWidth = 1200;
    canvasHeight = 600;
    createCanvas(canvasWidth, canvasHeight);

    //Matter.js physics engine setup
    engine = Engine.create();
    world = engine.world;

    //Creating the edges
    side_EdgesWidth = 10;
    topAndBottom_EdgesHeight = 10;
    rightEdge = new Edge(canvasWidth + (side_EdgesWidth / 2),
        canvasHeight / 2,
        side_EdgesWidth,
        canvasHeight);
    leftEdge = new Edge(0 - (side_EdgesWidth / 2),
        canvasHeight / 2,
        side_EdgesWidth, canvasHeight);
    topEdge = new Edge(canvasWidth / 2,
        0 - (topAndBottom_EdgesHeight / 2),
        canvasWidth,
        topAndBottom_EdgesHeight);
    bottomEdge = new Edge(canvasWidth / 2,
        canvasHeight + (topAndBottom_EdgesHeight / 2),
        canvasWidth,
        topAndBottom_EdgesHeight);

    //Creating out objects that are used in the game.
    //Ground
    ground = new Platform(600, height, 1200, 20);
    ground.body.isStatic = true;
    //The Catapult elevator
    elevation = new Platform(195, 520, 20, 140);
    //TowerTables
    towerTable1 = new Platform(675, 490, 250, 20);
    towerTable2 = new Platform(950, towerTable1.body.position.y - 150, 290, 10);
    //The Base of the Catapult. Created for the bird getting into the catapult otherwise.
    cataBase = new Platform(195, 420, 20, 60);
    //Polygon (The ball this is to be shot).
    polygon = new Polygon(190, 345, 20);
    //The slingshot rope to be stretched and released
    slingshot = new SlingShot(polygon.body, { x: 190, y: 320 });

    //Create the cup towers
    // tower1
    tower1 = createTower(25, 30, 675, 345, 5, leftCups);
    //tower2
    tower2 = createTower(25, 30, 955, 200, 5, rightCups);

    // Publisher
    myName = "Peeyush Agarwal - Also Called, Peeyush-The Debugger"
}

//Function for creating tower of cups
function createTower(x_pos_spacer_para, y_pos_spacer_para, x_spaces_para, y_spaces_para, blocks_para, cupGroup) {
    x_pos_spacer = x_pos_spacer_para;
    y_pos_spacer = y_pos_spacer_para;

    x_spaces = x_spaces_para;
    y_spaces = y_spaces_para;

    blocks = blocks_para;

    // i is trying to confirm the number of blocks
    for (var i = 0; i < blocks; i++) {
        var y = y_spaces + (i * y_pos_spacer);
        var starCount = (i * 2) + 1;
        var x_start = x_spaces - (i * x_pos_spacer);
        //j is trying to confirm the number of stars in a block
        for (var j = 0; j < starCount; j++) {
            var x = x_start + (j * x_pos_spacer);
            cup = new Cup(x, y, 25, 30);
            cupGroup.push(cup);
        }
    }
}

//The draw that is the main brain for our code.
function draw() {
    //Background
    background(255);
    //Matter.js engine update
    Engine.update(engine);
    //Illustration modes
    rectMode(CENTER);
    ellipseMode(RADIUS);
    imageMode(CENTER);
    angleMode(RADIANS);

    //Vanish the cups when they are off the tables
    vanishCups();

    //Propertie(s) used in our code
    towerTable2.body.position.y = towerTable1.body.position.y - 150;

    // Displaying objects created in our game
    ground.display();//Ground
    elevation.display("blue");//Elevation for catapult
    slingshot.displayImg1();//Slingshot
    polygon.display();//Hexagon ball that is thrown
    slingshot.displayImg3();//Slingshot's image 3, the holder for the hexagon ball
    slingshot.displayImg2();//Slingshot's image 2, the Base, and the right side bar of the catapult
    slingshot.displayLeftLine();//Slingshot's left line
    slingshot.displayRightLine();//Slingshot's right line
    towerTable1.display("green");//Tower table 1 display
    towerTable2.display("yellow");//Tower table 2 display
    //Display cup placed on the left side tower table
    for (var k = 0; k < leftCups.length; k++) {
        var cup = leftCups[k];
        cup.display("orange");
    }
    //Display cup placed on the right side tower table
    for (var l = 0; l < rightCups.length; l++) {
        var cup = rightCups[l];
        cup.display("orange");
    }

    //Conditional prgramming world enters
    //When the polygon's positions are meeting the required points and its speed it also considerably lower and nearby to stop, we will give another chance to the player
    if (polygon.body.velocity.x < 2
        && polygon.body.velocity.y < 2
        && polygon.body.velocity.x > -2
        && polygon.body.velocity.y > -2
        && polygon.body.position.x > 255) {
        reset();
        console.log();
    }
    //When the polygon went out of the screen, or went ahead of the catapult, we will give another chance to the player
    if (isOffScreen(polygon.body, polygon.radius, polygon.radius)) {
        reset();
    }

    //When the polygon went behind and belowe the catapult, we will give another chance to the player
    if (polygon.body.position.x < 135
        && polygon.body.position.y > 445) {
        reset();
    }

    //When the game can be restarted. In programming language, when the game can be reloaded and all objects position and other properties to be set in their defualt values
    //When the restart the game key is pressed
    if (keyDown("r")) {
        reloadPage();
    }

    textSize(20);
    push();
    fill(rgb(random(0, 255), random(0, 255), random(0, 255)));
    //Instructions
    text('Press "R" key to restart your game', 600, 550);
    //Publisher
    text("Created by: " + myName, 100, 200);
    pop();
}
// Project 30 over. Done on the first commit. Task Accomplished according to me. Added vanishing effect.
//When the mouse is dragged over the object, the catapult strings should stretch
function mouseDragged() {
    if (slingshot.sling.bodyA != null) {
        Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
    }
}

//When the mouse is released, the polygon should release
function mouseReleased() {
    if (slingshot.sling.bodyA != null) {
        slingshot.release();
    }
}

//When the game is be restarted
function reset() {
    Body.setPosition(polygon.body, { x: 190, y: 345 });
    slingshot.attach(slingshot.sling, polygon.body);
}

//Function to check if an object is not in the display area. It is out of the screen. In programming language, when the object x is greater than the max x of the display, or the x is smaller the the min x of the display, or the y of the object is greater then the max y, or the y is smaller then the min y of the display, the object is considered offScreen.
function isOffScreen(object, objectRequiredWidth, objectRequiredHeight) {
    return (
        object.position.x > width + (objectRequiredWidth / 2)

        || object.position.x < 0 - (objectRequiredWidth / 2)

        || object.position.y > height + (objectRequiredHeight / 2)

        || object.position.y < 0 - (objectRequiredHeight / 2));
}

//Restart the game
function reloadPage() {
    location.reload();
}

//Function for Cup Vanish Conditions
function vanishCups() {
    for (var m = 0; m < leftCups.length; m++) {
        var cup = leftCups[m];
        if (cup.body) {
            var cupPos = cup.body.position;
        }
        if (cupPos.y > 500
            || cupPos.x > 800
            || cupPos.x < 550
            || cup.body.speed.x > 5
            || cup.body.speed.y > 5) {
            cup.fadeAndVanish();
        }
    }

    for (var n = 0; n < rightCups.length; n++) {
        var cup = rightCups[n];
        var cupPos = cup.body.position;
        if (cupPos.y > 345
            || cupPos.x > 1095
            || cupPos.x < 805
            || cup.body.speed.x > 5
            || cup.body.speed.y > 5) {
            cup.fadeAndVanish();
        }
    }
}
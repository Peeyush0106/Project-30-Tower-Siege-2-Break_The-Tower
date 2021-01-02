// var shouldReset;
// function setup() {
    // shouldReset = false;
// }

// function draw() {
//     if (keyDown("r")) {
        // shouldReset = true;
    // }

    // fill("Green");
    // textSize(20);
    // if (gameWon()) {
    //     text("You pushed all cups off the tables. Your score is: "
    //         + score + ". You played: "
    //         // + feedbackTag
    //         ,
    //         20, 145);
    // }

    // if (shouldReset) {
    //     var tower1Prameters = {
    //         x_pos_spacer: 25,
    //         y_pos_spacer: 30,
    //         x_spaces: 675,
    //         y_spaces: 345,
    //         blocks: 5,
    //         cupGroup: leftCups
    //     }
    //     restartAuto(leftCups, false, tower1Prameters);

    //     var tower2Prameters = {
    //         x_pos_spacer: 25,
    //         y_pos_spacer: 30,
    //         x_spaces: 955,
    //         y_spaces: 200,
    //         blocks: 5,
    //         cupGroup: rightCups
    //     }
    //     restartAuto(rightCups, false, tower2Prameters);
    // }
// }

// function reset() {
//     Body.setPosition(polygon.body, { x: 190, y: 345 });
//     slingshot.attach(slingshot.sling, polygon.body);
//     timesReset += 1;
// }

// function restart() {
//     for (var m = 0; m < leftCups.length; m++) {
//         var cup = leftCups[m];
//         cup.delete(leftCups);
//     }
//     for (var n = 0; n < rightCups.length; n++) {
//         var cup = rightCups[n];
//         cup.delete(rightCups);
//     }
//     createTower(25, 30, 675, 345, 5, leftCups);
//     createTower(25, 30, 955, 200, 5, rightCups);
//     shouldReset = false;
// }

// function restartAuto(array, shouldResetBool, towerpara) {
// for (var x = 0; x < array.length; x++) {
//     var cup = array[x];
//     cup.delete(array);
// }
// createTower(towerpara.x_pos_spacer, towerpara.y_pos_spacer, towerpara.x_spaces, towerpara.y_spaces, towerpara.blocks, towerpara.cupGroup);
// shouldReset = shouldResetBool;
// }

// function gameWon() {
//     for (var o = 0; o < leftCups.length; o++) {
//         for (var p = 0; p < rightCups.length; p++) {
//             var Lcup = leftCups[o];
//             var Rcup = rightCups[p];
//             return (Lcup.body.position.y > 345 && Rcup.body.position.y > 500);
//         }
//     }
// }

// class Cup {
//     constructor(x, y, width, height) {
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//         this.options = {
//             // isStatic: true,
//             restitution: 0.2,
//             density: 0.1
//         }
//         this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, this.options);
//         World.add(world, this.body);
//         this.color = rgb(random(0, 255), random(0, 255), random(0, 255));
//     }
//     display() {
//         push();
//         fill(this.color);
//         rect(this.body.position.x, this.body.position.y, this.width, this.height);
//         pop();
//     }
    // delete(array) {
    //     World.remove(world, this.body)
    //     var removedElement = array.pop();
    //     var removedElements = [];
    //     removedElements.push(removedElement);
    // }
// }
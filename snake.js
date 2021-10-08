







// pen.fillRect(20,20,50,50);//drawing a filled rectanglle at 20,20 with height=50 and width=50


//Operations inside the init function are done only once
function init() {
    canvas = document.getElementById("mycanvas");

    //variables with not any data type are global variables

    W = canvas.width = 500;
    H = canvas.height = 500;

    //canvas is used to draw graphics

    pen = canvas.getContext('2d');

    //by pen we can draw something on the canvas

    rect = {
        x: 20,
        y: 20,
        w: 40,
        h: 40,
        speed: 10
    }
}

function draw() {
    // console.log("Inside draw");
    pen.clearRect(0, 0, W, H);
    //We clear the canvas before drawing the next rectangle
    pen.fillRect(rect.x, rect.y, rect.h, rect.w);
    pen.fillStyle = "blue";//drawing anything will get color blue

}

function update() {
    // console.log("Inside update");
    rect.x += rect.speed;
    if (rect.x > W - rect.w || rect.x < 0) {
        rect.speed *= -1;
    }
    //if the x co-ordinate of the snake goes outside the boundaries it will set the speed to -1 to change direction
}

function gameLoop() {
    console.log("Inside gameLoop");
    draw();
    update();
}

init();
var f = setInterval(() => {
    gameLoop();
}, 100);





/*
 * Game Loop=>
 * 1. Intial stage =>
 * 2.Draw <=> Update =>
 * 4.This will go on until game over
 */






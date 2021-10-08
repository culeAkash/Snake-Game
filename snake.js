console.log("snake");


//operations inside the init function are executed only once
function init() {
    //first fetch the canvas element
    var canvas = document.getElementById("mycanvas");
    W = H = canvas.width = canvas.height = 1000;
    pen = canvas.getContext('2d');
    cellSize = 66;
    //setting the snake object

    snake = {
        init_length: 5,
        color: "blue",
        cells: [],
        direction: "right",

        createSnake: function () {
            for (var i = this.init_length; i > 0; i--) {
                this.cells.push({ x: i, y: 0 });
            }
        },

        drawSnake: function () {
            for (var i = 0; i < this.cells.length; i++) {
                if(i==0){
                    pen.fillStyle="red";
                }
                else{
                    pen.fillStyle="blue";
                }
                pen.fillRect(this.cells[i].x * cellSize, this.cells[i].y * cellSize, cellSize - 2, cellSize - 2);
            }
        },

        updateSnake: function(){
            //Pop the last cell from the snake and then add a new element at the start of the snake
            //In this way the snake will gets its length incresed by 1
            this.cells.pop();
            var headX= this.cells[0].x;
            var headY= this.cells[0].y;

            var X= headX+1;
            var Y= headY;
            this.cells.unshift({x:X,y:Y});
        }
    };


    snake.createSnake();


}


function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
}

function update(){
    console.log("Update Snake");
    snake.updateSnake();
}



function gameLoop(){
    draw();
    update();
}
init();

setInterval(() => {
    gameLoop();
}, 100);
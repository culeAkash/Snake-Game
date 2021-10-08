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
                pen.fillRect(this.cells[i].x * cellSize, this.cells[i].y * cellSize, cellSize - 2, cellSize - 2);
            }
        }
    };


    snake.createSnake();
    snake.drawSnake();


}


init();
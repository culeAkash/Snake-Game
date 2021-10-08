console.log("snake");


foodImage= new Image();
foodImage.src= "assets/apple.png";

trophyImg= new Image();
trophyImg.src= "assets/trophy.png";

//operations inside the init function are executed only once
function init() {
    //first fetch the canvas element
    var canvas = document.getElementById("mycanvas");
    W = H = canvas.width = canvas.height = 1000;
    pen = canvas.getContext('2d');
    cellSize = 66;
    gameOver= false;
    food= getRandomFood();
    score=5;



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

            //Now we will update the snake according to the direction property

            //If the snake has eaten the food , increse the length of the snake and
            //generate new food object

            var headX= this.cells[0].x;
            var headY= this.cells[0].y;

            if(headX== foodX && headY== foodY){
                food= getRandomFood();
                score++;
            }
            else{
            this.cells.pop();
            }

             
            var nextX,nextY;

            if(this.direction=="right"){
                nextX= headX+1;
                nextY= headY;
            }
            else if(this.direction=="left"){
                nextX= headX-1;
                nextY= headY;
            }
            else if(this.direction=="down"){
                nextX= headX;
                nextY= headY+1;
            }
            else if(this.direction=="up"){
                nextX= headX;
                nextY= headY-1;
            }
            
            // if(nextX>W-this.cells[0].x || nextY>H-this.cells[0].y || nextX<0 || nextY<0){
            //     console.log("game over");
            //     init();
            // }

            this.cells.unshift({x:nextX,y:nextY});

            //Write a logic that the the game will be over if it goes out of range
            var lastX= Math.round(W/cellSize);
            var lastY= Math.round(H/cellSize);
            
            if(this.cells[0].y<0 || this.cells[0].x<0 || this.cells[0].x>lastX || this.cells[0].y>lastY){
                gameOver=true;
            }
        }
    };


    snake.createSnake();

    //Add a event listener to the document object

    function keyPressed(e){
        // console.log("Key is pressed"+e.key);

        //Conditional statements
        if(e.key == "ArrowRight" || e.key=='d'){
            snake.direction= "right";
        }
        else if(e.key== "ArrowLeft" || e.key== "a"){
            snake.direction= "left";
        }
        else if(e.key== "ArrowDown" || e.key== "s"){
            snake.direction="down";
        }
        else if(e.key== "ArrowUp" || e.key== "w"){
            snake.direction= "up";
        }

    }

    document.addEventListener('keydown',keyPressed);


}


function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
    pen.fillStyle="red";
    pen.drawImage(foodImage,food.x*cellSize,food.y*cellSize, cellSize,cellSize);

    pen.drawImage(trophyImg,18,20,cellSize,cellSize);
    pen.fillStyle="blue";
    pen.font= "25px Roboto"
    pen.fillText(score,50,50);
}

function update(){
    console.log("Update Snake");
    snake.updateSnake();
}

function getRandomFood(){
     foodX = Math.round(Math.random()*(W-cellSize)/cellSize);
     foodY= Math.round(Math.random()*(H-cellSize)/cellSize);

     food= {
        x: foodX,
        y: foodY,
        color: "red"
    }
    return food;

}

function gameLoop(){
    if(gameOver==true){
        clearInterval(f);
        alert("game Over");
    }
    draw();
    update();
}
init();

f= setInterval(() => {
    gameLoop();
}, 100);
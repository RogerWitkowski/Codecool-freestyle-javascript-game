let canvas = document.getElementById('myCanvas');
let context = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 2;
let paddleHeight = 5;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightMove = false;
let leftMove = false;
let lives = 6;
let score = 0;
let brickRowCount = 10;
let brickColumnCount = 37;
let brickWidth = 3;
let brickHeight = 3;
let brickPadding = 5;
let brickOffSetTop = 15;
let brickOffSetLeft = 5;


function drawLives() {
    // rysuje zycia gracza na planszy
    context.font = "12px Arial";
    context.fillStyle = "red";
    context.fillText("Lives left: " + lives, 232, 10);
}


function checkLives() {
    // sprawdza ilosc pozostalych zyc gracza
    lives--;
    if (lives == -1) {
        alert("HAHAH YOU FOOL!!!! TRY AGIN YOUR LUCK");
        document.location(setTimeout(function () {
            window.location.href = "index.html";
        },
            800));
    } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width - paddleWidth) / 2;
    }
}


function drawInfo() {
    //rysuje informacje na planszy
    context.font = "12px Arial";
    context.fillStyle = "yellow";
    context.fillText("Colect 303 Pilots (Points) !", 75, 10)
}


function drawScore() {
    // funkcja tworzenia punktacji
    context.font = "12px Arial";
    context.fillStyle = "red";
    context.fillText("Score: " + score, 8, 10);
}


function checkScore() {
    // funkcja sprawdza ilosc punktow, jak gracz wygra to wyswietla komunikat i przerywa gre
    if (score == 304) {
        alert("Oha You Won... How is possible?!?!?! Well Done Young Padawan!!!!");
        document.location(setTimeout(function () {
            window.location.href = "endscreen.html";
        },
            800));
    }
}


let bricks = []; // tworzenie listy cegiel
for (let col = 0; col < brickColumnCount; col++) {
    bricks[col] = [];
    for (let row = 0; row < brickRowCount; row++) {
        bricks[col][row] = { x: 0, y: 0, status: 1 };
    }
}


function drawBricks() {
    // funkcja rysuje klocki na planszy
    for (let col = 0; col < brickColumnCount; col++) {
        for (let row = 0; row < brickRowCount; row++) {
            if (bricks[col][row].status == 1) {
                let brickX = (col * (brickWidth + brickPadding)) + brickOffSetLeft;
                let brickY = (row * (brickHeight + brickPadding)) + brickOffSetTop;
                bricks[col][row].x = brickX;
                bricks[col][row].y = brickY;
                context.beginPath();
                context.rect(brickX, brickY, brickWidth, brickHeight);
                context.fillStyle = "orange";
                context.fill();
                context.closePath();
            }
        }
    }
}


function collisionDetection() {
    // funkcja sprawdza czy nastopila kolizja cegly z pilka
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            let bCoordinates = bricks[c][r];
            if (bCoordinates.status == 1) {
                if (x > bCoordinates.x && x < bCoordinates.x + brickWidth && y > bCoordinates.y && y < bCoordinates.y + brickHeight) {
                    dy = -dy;
                    bCoordinates.status = 0;
                    score++;
                    checkScore();
                }
            }
        }
    }
}


function colorGen() {
    // funkcja generuje i zwraca randomowy kolor
    let letters = "0123456789ABCDEF".split('');
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function drawBall() {
    // funkcja rysuje pilke
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI * 2);
    context.fillStyle = colorGen();
    context.fill();
    context.closePath();
}


function drawPaddle() {
    // funkcja rysuje podest na dole ekranu
    context.beginPath();
    context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath();
}


function bouncingBallOffWalls() {
    // funkcja umozliwiajaca odbijanie pilki od scian
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy * 1.05;
        }
        else {
            checkLives();
        }
    }
}


document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)


function keyDownHandler(e) {
    // funkcja wykrywa event czy przycisk jest wcisniety czy nie
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightMove = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftMove = true;
    }
}


function keyUpHandler(e) {
    // funkcja wykrywa event czy przycisk jest wcisniety czy nie
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightMove = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftMove = false;
    }
}


function draw() {
    // funkcja aktywujaca wszystkie funkcje gry, funkcja czysci plansze
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    drawInfo();
    collisionDetection();
    x += dx;
    y += dy;
    bouncingBallOffWalls();
    if (rightMove) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) {
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftMove) {
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
    requestAnimationFrame(draw);
}


draw();   // !wywolywanie funkcji TODO:
let player;
let gameSwitch = 2;
let game2Switch = 1;
let gameWidth = 30;
let gameHeight = 20; 
let bulletSwitch = 0;

function update(board) {
    if (gameSwitch == 1) {
        player.movePlayer();
        isGrass = checkIfgrass(board.cells);
        if (!isGrass) {
            exitGate(board.cells,0);
        }
    } else if (gameSwitch == 2) {
        //pass
    }
   
}

function exitGate(cells,index) {
    cells[index].classList.remove(...cells[index].classList)
    cells[index].classList.add("cell")
    cells[index].classList.add("exit")
}

function update2(board) {
    if (game2Switch == 1) {
        player.movePlayer();
        isGrass = checkIfgrass(board.cells);
        if (!isGrass) {
            //game2Switch = 2;
            //initGame2();
        }
    } else if (game2Switch == 2) {
        //pass
    }
   
}

function initGame2() {
    text = document.getElementsByClassName("demo");
    text[0].outerHTML = "<p class=\"demo\" style=\"display:flex;justify-content: center;\">Avoid enemy bullets!</p>";
    document.getElementById("board").innerHTML = "";
    htmlBoard = new HTMLBoard(gameWidth,gameHeight, document.getElementById("board"),2);
    mapLayout2(htmlBoard);
    exitGate(htmlBoard.cells,568);
    gameBoard = new GameBoard(gameWidth,gameHeight, htmlBoard)
    player = new Player(gameBoard,2,2);
    initialBulletIndexes = [68,261,83,318,441,134];
    currentBulletIndexes = [68,261,83,318,441,134];
    bulletDistance = [4,4,4,4,5,4];
    bulletDirection = ["down","down","down","up","down", "up"];
    if (bulletSwitch == 0) {
        setInterval( function() { currentBulletIndexes = moveBullets(htmlBoard,currentBulletIndexes,initialBulletIndexes,bulletDistance,bulletDirection); }, 150 );
    } 
    document.addEventListener("keydown", ()=>{
        update2(htmlBoard)
    })
}

function moveBullets(board,current,initial,distance,direction) {
    let operators = {
        '+': function(a, b) { return a + b },
        '-': function(a, b) { return a - b },
    };
    let op;
    let op1;
    for (let i = 0; i < initial.length;i++) {
        if (direction[i] === "down") {
            op = '-';
        } else if (direction[i] === "up") {
            op = '+';
            op1 = '-';
        }
        if (board.cells[current[i]].className !== "cell player-right") {
            if (op === '-') {
                if (current[i] > initial[i]) {
                    board.cells[operators[op](current[i],gameWidth)].classList.remove(...board.cells[operators[op](current[i],gameWidth)].classList)
                    board.cells[operators[op](current[i],gameWidth)].classList.add("cell")
                    board.cells[operators[op](current[i],gameWidth)].classList.add("empty") 
                }
            } else if (op === '+') {
                if (current[i] < initial[i]) {
                    board.cells[operators[op](current[i],gameWidth)].classList.remove(...board.cells[operators[op](current[i],gameWidth)].classList)
                    board.cells[operators[op](current[i],gameWidth)].classList.add("cell")
                    board.cells[operators[op](current[i],gameWidth)].classList.add("empty") 
                }
            }
            board.cells[current[i]].classList.remove(...board.cells[current[i]].classList)
            board.cells[current[i]].classList.add("cell")
            board.cells[current[i]].classList.add("bullet")
            if (op === '-') {
                current[i] += gameWidth;
                if (current[i] > initial[i]+(30*distance[i])) {
                    board.cells[operators[op](current[i],gameWidth)].classList.remove(...board.cells[operators[op](current[i],gameWidth)].classList)
                    board.cells[operators[op](current[i],gameWidth)].classList.add("cell")
                    board.cells[operators[op](current[i],gameWidth)].classList.add("brick")
                    current[i] = initial[i];
                }
            } else if (op === '+') {
                current[i] -= gameWidth;
                if (current[i] < initial[i]-(30*distance[i])) {
                    board.cells[operators[op](current[i],gameWidth)].classList.remove(...board.cells[operators[op](current[i],gameWidth)].classList)
                    board.cells[operators[op](current[i],gameWidth)].classList.add("cell")
                    board.cells[operators[op](current[i],gameWidth)].classList.add("brick")
                    current[i] = initial[i];
                }
            }
            } 
            else {
                bulletSwitch = 1;
                youDied();
            }      
    }
    return current;
    
}

function checkIfgrass(cells) {
    let isGrass = false;
    for (let i = 0; i < cells.length;i++) {
        if (cells[i].className === "cell empty grass") {
            isGrass = true;
        } 
    }
    return isGrass;
    

}

function checkIfWall(boardRow,x,y) {
    isWall = false;
    if (boardRow[y].children[x].className === "cell brick" || boardRow[y].children[x].className === "cell enemy-down" || boardRow[y].children[x].className === "cell enemy-up" || boardRow[y].children[x].className === "cell enemy-left" || boardRow[y].children[x].className === "cell enemy-right") {
        isWall = true;
        return isWall;
    }
    return isWall;
}

function checkIfBullet(boardRow,x,y) {
    isBullet = false;
    if (boardRow[y].children[x].className === "cell bullet") {
        isBullet = true;
        return isBullet;
    }
    return isBullet;
}

function checkIfExit(boardRow,x,y) {
    ifExit = false;
    if (boardRow[y].children[x].className === "cell exit") {
        ifExit = true;
        return ifExit;
    }
    return ifExit;
}


function youDied() {
    window.location.href="dead.html";
}


class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    pointInDirection(direction,board) {
        let isWall;
        let isExit;
        let isBullet;
        if (direction == "up") {
            if (this.y-1 < 0) {
                return new Point(this.x, this.y)     
            } else {
                isWall = checkIfWall(board.children, this.x, this.y-1)
                isExit = checkIfExit(board.children, this.x, this.y-1)
                isBullet = checkIfBullet(board.children, this.x, this.y-1)
                if(isExit){
                    if (gameSwitch == 1) {
                        gameSwitch = 2;
                        initGame2();
                    } else if (game2Switch == 1) {
                        game2Switch = 2
                        setTimeout(function() {  window.location.href="quiz.html"; }, 500);
                    }
                } else if(isBullet){
                    youDied();
                } else if (!isWall){
                    return new Point(this.x, this.y-1)
                }
                else {
                    return new Point(this.x, this.y)
                } 
            }
        } else if (direction == "down") {
            if (this.y+1 < gameHeight) {
                isWall = checkIfWall(board.children, this.x, this.y+1)
                isExit = checkIfExit(board.children, this.x, this.y+1)
                isBullet = checkIfBullet(board.children, this.x, this.y+1)
                if(isExit){
                    if (gameSwitch == 1) {
                        gameSwitch = 2;
                        initGame2();
                    } else if (game2Switch == 1) {
                        game2Switch = 2
                        setTimeout(function() {  window.location.href="quiz.html"; }, 500);
                    }
                } else if(isBullet){
                    youDied();
                }
                else if (!isWall){
                    return new Point(this.x, this.y+1)
                }
                else {
                    return new Point(this.x, this.y)
                }     
            } else {
                return new Point(this.x, this.y)
            }
        } else if (direction == "left") {
            if (this.x-1 < 0) {
                return new Point(this.x, this.y)     
            } else {
                isWall = checkIfWall(board.children, this.x-1, this.y)
                isExit = checkIfExit(board.children, this.x-1, this.y)
                isBullet = checkIfBullet(board.children, this.x-1, this.y)
                if(isExit){
                    if (gameSwitch == 1) {
                        gameSwitch = 2;
                        initGame2();
                    } else if (game2Switch == 1) {
                        game2Switch2 = 2
                        setTimeout(function() {  window.location.href="quiz.html"; }, 500);
                    }
                } else if(isBullet){
                    youDied();
                }
                else if (!isWall){
                    return new Point(this.x-1, this.y)
                }
                else {
                    return new Point(this.x, this.y)
                }
            }
        } else if (direction == "right") {
            if (this.x+1 < gameWidth) {
                isWall = checkIfWall(board.children, this.x+1, this.y)
                isExit = checkIfExit(board.children, this.x+1, this.y)
                isBullet = checkIfBullet(board.children, this.x+1, this.y)
                if(isExit){
                    if (gameSwitch == 1) {
                        gameSwitch = 2;
                        initGame2();
                    } else if (game2Switch == 1) {
                        game2Switch = 2
                        setTimeout(function() {  window.location.href="quiz.html"; }, 500);
                    }
                } else if(isBullet){
                    youDied();
                }
                else if (!isWall){
                    return new Point(this.x+1, this.y)
                }
                else {
                    return new Point(this.x, this.y)
                }    
            } else {
                return new Point(this.x, this.y)
            }
        }
    }
}

class Player {
    constructor(board,x,y) {
        let startingPosition = new Point(x,y)
        this.body = [startingPosition]
        board.addPlayer(startingPosition)
        this.direction = "down"
        this.board = board;
        document.addEventListener("keydown", this.updateDirection.bind(this))
    }

    updateDirection(e) {
        if (e.key == "w") {
           this.direction = "up" 
        } else if (e.key == "s") {
            this.direction = "down" 
        } else if (e.key == "a") {
            this.direction = "left" 
        } else if (e.key == "d") {
            this.direction = "right" 
        }

    }

    movePlayer() {
        let newPosition = this.body[0].pointInDirection(this.direction,board);
        this.body.splice(0, 0, newPosition)
        let oldPosition = this.body.pop()
        this.board.removePlayer(oldPosition)
        this.board.addPlayer(newPosition, this.direction)
    }
}

class HTMLBoard {
    constructor(width, height, parentElement,level) {
        this.cells = [];
        for(let y = 0; y < height; y++) {
            let row = document.createElement("div")
            parentElement.appendChild(row)
            row.classList.add("row")
            for (let x = 0; x < width; x++) {
                let cell = document.createElement("span")
                row.appendChild(cell)
                this.cells.push(cell)
                cell.classList.add("cell")
                cell.classList.add("empty")
                if (level == 1){
                    cell.classList.add("grass")
                }
                
            }
        }
    }

    updateDisplay(point, value) {
        let cell = this.cells[point.y * gameWidth + point.x]
        cell.classList.remove(...cell.classList)
        cell.classList.add("cell")
        cell.classList.add(value)
    }
}



class GameBoard {
    constructor(width, height, htmlBoard) {
        this.width = width;
        this.height = height;
        this.htmlBoard = htmlBoard;
        this.cells = [];
        for (let y = 0; y < height;y++) {
            for (let x = 0; x < width;x++) {
                this.cells.push("empty");
            }
        }
    }

    addPlayer(point, direction) {
        this.cells[point.y * gameWidth + point.x] = "player"
        if (direction == "down") {
            this.htmlBoard.updateDisplay(point, "player-down");
        }
        else if (direction == "left") {
            this.htmlBoard.updateDisplay(point, "player-left");
        }
        else if (direction == "right") {
            this.htmlBoard.updateDisplay(point, "player-right");
        } else {
            this.htmlBoard.updateDisplay(point, "player")
        }
    }

    removePlayer(point) {
        this.cells[point.y * gameWidth + point.x] = "empty"
        this.htmlBoard.updateDisplay(point, "empty");
    }
}


function initGame() {

    let htmlBoard = new HTMLBoard(gameWidth,gameHeight, document.getElementById("board"),1);
    mapLayout(htmlBoard);
    let gameBoard = new GameBoard(gameWidth,gameHeight, htmlBoard)
    player = new Player(gameBoard,0,0);
    document.addEventListener("keydown", function (e){
        if (e.key === 'w' || e.key === 's' || e.key === 'a' || e.key === 'd')
        update(htmlBoard)
    })
    

}

function mapLayout(board) {
    let brickIndexes = [5,35,65,95,125,185,215,245,275,305,335,365,395,31,
        30,32,33,93,94,92,120,150,90,60,151,152,153,214,213,212,211,241,
        271,301,360,361,362,363,333,303,273,425,424,423,422,420,450,452,
        482,512,511,541,575,545,515,485,186,187,188,190,191,192,193,
    194,195,196,197,198,199,200,126,128,98,68,38,39,40,41,42,100,130,
    131,132,102,103,104,105,106,107,77,300,350,351,352,382,412,442,
    472,502,532,562,444,445,446,447,448,343,344,342,341,312,282,252,
    340,339,338,368,398,428,458,498,497,496,495,467,437,407,377,347,
    58,88,118,148,178,117,116,115,114,113,112,111,110,109,176,175,174,
    173,172,142,202,232,262,292,293,294,295,296,297,298,268,238,237,
    236,235,234,269,359,358,357,387,417,414,384,474,504,534,535,536,
    537,550,551,552,553,554,555,556,557,558,559,560,523,493,463,433,403]
    for (let i = 0;i < brickIndexes.length;i++) {
        board.cells[brickIndexes[i]].classList.remove(...board.cells[brickIndexes[i]].classList)
        board.cells[brickIndexes[i]].classList.add("cell")
        board.cells[brickIndexes[i]].classList.add("brick")
    } 
}

function mapLayout2(board) {
    let brickIndexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17
    ,18,19,20,21,22,23,24,25,26,27,28,29,30,59,60,89,90,119,120,149,150,
    179,180,209,210,239,240,269,270,299,300,329,330,359,360,389,390,419,
    420,449,450,479,480,509,510,539,540,569,570,571,572,573,574,575,576,
    577,578,579,580,581,582,583,584,585,586,587,588,589,590,591,592,593,
    594,595,595,596,597,598,599,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,388,387,386,385,384,383,382,381,380,379,378,377,376,375,374,373,372,371,370,369,368,367,366,365,364]
    for (let i = 0;i < brickIndexes.length;i++) {
        board.cells[brickIndexes[i]].classList.remove(...board.cells[brickIndexes[i]].classList)
        board.cells[brickIndexes[i]].classList.add("cell")
        board.cells[brickIndexes[i]].classList.add("brick")
    }
    let enemyIndexes = [38,231,53,348,411,164]
    let enemyDirection = ["down","down","down","up","down","up"]
        for (let i = 0;i < enemyIndexes.length;i++) {
            board.cells[enemyIndexes[i]].classList.remove(...board.cells[enemyIndexes[i]].classList)
            board.cells[enemyIndexes[i]].classList.add("cell")
            if (enemyDirection[i] === "down") {
                board.cells[enemyIndexes[i]].classList.add("enemy-down")
            } else if (enemyDirection[i] === "up") {
                board.cells[enemyIndexes[i]].classList.add("enemy-up")
            } else if (enemyDirection[i] === "left") {
                board.cells[enemyIndexes[i]].classList.add("enemy-left")
            } else if (enemyDirection[i] === "right") {
                board.cells[enemyIndexes[i]].classList.add("enemy-right")
            }
        }
}

window.onload = initGame2
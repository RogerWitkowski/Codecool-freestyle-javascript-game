var character = document.getElementById("character")
var block = document.getElementById("block")
points = 0
game = true


var checkDead = setInterval (function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    rocket_speed()

    console.log (characterTop)
    if (blockLeft<100 && blockLeft>50 && characterTop >290) {

    block.style.animation = "none"
        block.style.display = "none"
        game = false
        document.body.innerHTML = '<p1> You are dead </p1>'
        setTimeout(function() {  window.location.href="preview.html"; }, 4000)
    }
},10)

function rocket_speed (){
    console.log ('rocketspeed')
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (points >= 10) {
         setTimeout(function() {  window.location.href="tank.html"; }, 5);
    }
    console.log (points)
    if (points == 1) {
         block.style.animation = 'block 3000ms infinite linear'
    }
    else if (points>5 && points < 10 && blockLeft < 10) {
        block.style.animation = 'x'
        block.style.animation = 'block 2000ms infinite linear'
    }
}



function jump (){
    if (character.classList != "animate")
    {character.classList.add ("animate");}
    if (points==0){setTimeout(function (){
        character.classList.remove("animate")
    },10 )}
    setTimeout(function (){
        character.classList.remove("animate")
    },500 )
}

function points_counter (){
    if (game==true){
        points ++
        pointsText = document.getElementById("points")
        pointsText.innerText = `Your points: ${points}`
        }
}


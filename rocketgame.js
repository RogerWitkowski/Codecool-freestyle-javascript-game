var character = document.getElementById("character")
var block = document.getElementById("block")
points = 0
game = true


var checkDead = setInterval (function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    console.log (characterTop)
    if (blockLeft<100 && blockLeft>50 && characterTop == 300) {

    block.style.animation = "none"
        block.style.display = "none"
        alert ("u lose")
        game = false
    }
},10)

// function rocket_speed (){
//     if (points>5 && points < 10) {
//         block.style.animation = 'block 1000ms infinite linear'
//     }
//         else if (points>10 && points < 15) {
//         block.style.animation = 'block 1700ms infinite linear'
//     }
//                 else if (points>15 && points < 25) {
//         block.style.animation = 'block 1500ms infinite linear'
//     }
//                         else if (points>25 && points < 35) {
//         block.style.animation = 'block 1250ms infinite linear'
//     }
//                                 else if (points>35) {
//         block.style.animation = 'block 1000ms infinite linear'
//     }
// }

function jump (){
    if (character.classList != "animate")
    {character.classList.add ("animate")}
    setTimeout(function (){
        character.classList.remove("animate")
    },500 )
}

function points_counter (){
    if (game==true){
        points ++
        pointsText = document.getElementById("points")
        pointsText.innerText = `Your points: ${points}`
        rocket_speed()}
}



let offSet = 100

let evilB = document.getElementById('evilButton')
evilB.addEventListener('click', () => {
    //alert('HAHAHAHAHA.....You pass the test!! Wait for it!!!!')
    let song = new Audio('static/Touch.mp3')
    song.play()
    let img = document.createElement("img");
    img.src = "static/idiNaChuj.jpg";
    let block = document.getElementById("x");
    block.appendChild(img);
    setTimeout(function() {  window.location.href="rocketgame.html"; }, 6000);
})

document.addEventListener('mousemove', (e) => {
    let x = e.pageX
    let y = e.pageY
    let buttonBox = evilB.getBoundingClientRect()
    let horizontalDistanceFrom = distanceFromButton(buttonBox.x, x, buttonBox.width)
    let verticalDistanceFrom = distanceFromButton(buttonBox.y, y, buttonBox.height)
    let horizontalOffSet = buttonBox.width / 2 + offSet
    let verticalOffSet  = buttonBox.height / 2 + offSet
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffSet && Math.abs(verticalDistanceFrom) <= verticalOffSet){
        setButtonPosition(
            buttonBox.x + horizontalOffSet / horizontalDistanceFrom * 10,
            buttonBox.y + verticalOffSet / verticalDistanceFrom * 10
        )
    }

})


function setButtonPosition(left, top){
    let windowBox = document.body.getBoundingClientRect()
    let buttonBox = evilB.getBoundingClientRect()

    if (distanceFromButton(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - offSet
    }
    if (distanceFromButton(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + offSet
    }
    if (distanceFromButton(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - offSet
    }
    if (distanceFromButton(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + offSet
    }
    evilB.style.left = `${left}px`
    evilB.style.top = `${top}px`
}

function distanceFromButton(boxPosition, mousePosition, boxSize){
    return boxPosition - mousePosition + boxSize / 2
}





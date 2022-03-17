let sec = 0
let minute = 0
let divTimer = document.getElementById("timer")
let scores = []

function timer(start) {

    if (start == true) {
        setInterval(function () {
            sec++;
            if (sec == 60) {
                minute++;
                sec = 0
            }
            divTimer.innerText = `Try to complete the game as quickly as possible. Time has just started!\n Time: ${minute} minutes, ${sec} seconds`
            console.log('time')
        }, 1000)
    }
}

function button_click() {
    let final_time = document.getElementById('final_time')
    final_time.innerText = `Your Time is: ${minute} minutes, ${sec} seconds`
    let score = `${minute}, ${sec}`
}




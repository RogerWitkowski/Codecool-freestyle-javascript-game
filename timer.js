let sec = 0
let minute = 0
let divTimer = document.getElementById("timer")

function timer (){

   setInterval (function (){
       sec ++;
       if (sec==60) { minute ++;
       sec = 0}
       divTimer.innerText = `Try to complete the game as quickly as possible. Time has just started!\n Time: ${minute} minutes, ${sec} seconds`
       console.log ('time')
   }, 1000)
}



function showCredits(){
    document.getElementById("theHead").style.display = "none";
    document.getElementById("creditBtn").style.display = "none";
    document.getElementById("newGame").style.display = "none";
    document.getElementById("credits").style.display = "block";
    document.getElementById("backBtn").style.display = "block";
}

var goBack = function(){
    document.getElementById("backBtn").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("theHead").style.display = "block";
    document.getElementById("newGame").style.display = "block";
    document.getElementById("creditBtn").style.display = "block";
  };


function typeWriter(txt,i,speed,paragraph){  
  if (i < txt.length){
    document.getElementById(paragraph).innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
    }
}

function intro(){ // if you want to add text; Create a new var with your text; duplicate the function with your variables; set the fourth parameter to demo_3 etc
  document.body.innerHTML = '<p class="demo" id="demo_1"></p><br><p class="demo" id="demo_2"></p><br><p class="demo" id="demo_3"></p><br><p class="demo" id="demo_4"></p><br><p class="demo" id="demo_5"></p>';
  var txt_1 = '24 February 2022 6:00 It\'s freezing outside...';
  var txt_2 = 'The end of days is in sight.' 
  var txt_3 = 'Hello there. Im Volodimir a gypsy tractor. Fuck you.'
  var speed = 5;
  var i = 0;
  typeWriter(txt_1, i, speed, "demo_1")
  let timer = setTimeout(function () {typeWriter(txt_2, i, speed, "demo_2")}, speed*txt_1.length+300)
  let timer1 = setTimeout(function () {typeWriter(txt_3, i, speed, "demo_3")}, speed*txt_1.length+speed*txt_2.length+300)
  let timer10 = setTimeout(function () {foo()}, speed*txt_1.length+speed*txt_2.length+300+speed*txt_3.length+300);
}

var foo = function(){
  var button = document.createElement('button');
  button.innerHTML = 'click me';
  button.onclick = function(){
    timer = false
  }
  document.body.appendChild(button);
}
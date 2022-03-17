
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

  img = document.createElement("img");
  img.src = "static/volodimir.jpg";


function typeWriter(txt,i,speed,paragraph){  
  if (i < txt.length){
    document.getElementById(paragraph).innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
    }
}

function intro(){ // if you want to add text; Create a new var with your text; duplicate the function with your variables; set the fourth parameter to demo_3 etc
  document.body.innerHTML = '<p class="demo" id="demo_1"></p><br><p class="demo" id="demo_2"></p><br><p class="demo" id="demo_3"></p><br><p class="demo" id="demo_4"></p><br><p class="demo" id="demo_5"></p>';
  var txt_1 = '24 February 2022 6:00 You wake up in the middle of a field as the first glimpses of light touches your mud covered body.';
  var txt_2 = 'Welcome to Ukraine! - Calls something strange behind you.' 
  var txt_3 = 'There is no war here! I\'m Volodimir, the russian tractor. Prepare to die.'
  var txt_4 = 'Your task is to escape from Volodimir the Tractor. Good luck!'
  var speed = 5;
  var i = 0;
  typeWriter(txt_1, i, speed, "demo_1")
  let timer = setTimeout(function () {typeWriter(txt_2, i, speed, "demo_2")}, speed*txt_1.length+300)
  let timer1 = setTimeout(function () {typeWriter(txt_3, i, speed, "demo_3")}, speed*txt_1.length+speed*txt_2.length+300)
  let timer2 = setTimeout(function () {typeWriter(txt_4, i, speed, "demo_4")}, speed*txt_1.length+speed*txt_2.length+speed*txt_3.length+300)
  let timer10 = setTimeout(function () {foo()}, speed*txt_1.length+speed*txt_2.length+300+speed*txt_3.length+speed*txt_4.length+300);
}

var foo = function(){
  var button = document.createElement('button');
  button.innerHTML = 'click me';
  button.onclick = function(){
    questions()
  }
  document.body.appendChild(button);
}
function dead(refreshTime, paragraph, txt_1){
  document.body.innerHTML = "<br><p class=\"demo\" id=\"demo_1\"></p><br>";
  document.body.innerHTML += "<br><p class=\"demo\" id=\"demo_2\"></p><br>";
  document.body.innerHTML += "<br><p class=\"demo\" id=\"demo_3\"></p><br>";

  var i = 0;
  var speed = 50;
  typeWriter(txt_1, i, speed, paragraph);
  setTimeout(function () {location.reload()}, refreshTime);
}
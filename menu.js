
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
  if (i < txt.length) {
    document.getElementById(paragraph).innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
    }
}

function intro(){ // if you want to add text; Create a new var with your text; duplicate the function with your variables; set the fourth parameter to demo_3 etc
  document.body.innerHTML = '<p class="demo" id="demo_1"></p><br><p class="demo" id="demo_2"></p><br><p class="demo" id="demo_3"></p><br><p class="demo" id="demo_4"></p>';
  var txt_1 = '24 February 2022 6:00 It\'s freezing outside...';
  var txt_2 = 'The end of days is in sight.' 
  var speed = 50;
  var i = 0;
  typeWriter(txt_1, i, speed, "demo_1")
  let timer = setTimeout(function () {typeWriter(txt_2, i, speed, "demo_2")}, speed*txt_1.length+200)
}
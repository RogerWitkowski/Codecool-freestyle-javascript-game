
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




function typeWriter(txt,i,speed){  
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed) }, speed);
    }
}

function intro(){
  document.body.innerHTML = '<p id="demo"></p>';
  var txt = '24 February 2022 6:00';
  var speed = 150;
  var i = 0;
  typeWriter(txt, i, speed)
}
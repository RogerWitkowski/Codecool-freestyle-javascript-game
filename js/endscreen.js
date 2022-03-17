function typeWriter(txt,i,speed,paragraph){
  if (i < txt.length){
    document.getElementById(paragraph).innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
    }
}

function final_text(){ // if you want to add text; Create a new var with your text; duplicate the function with your variables; set the fourth parameter to demo_3 etc
  document.body.innerHTML = '<p class="demo" id="demo_1"></p><p class="demo" id="demo_2"></p><p class="demo" id="demo_3"></p><br><p class="demo" id="demo_4"></p><br><p class="demo" id="demo_5"></p>';
  var txt_1 = 'Wrr! you were lucky this time.';
  var txt_2 = 'This is the end for now, but you wouldn\'t feel safe. I will keep an eye on you'
  var speed = 5;
  var i = 0;
  typeWriter(txt_1, i, speed, "demo_1")
  let timer = setTimeout(function () {typeWriter(txt_2, i, speed, "demo_2")}, speed*txt_1.length+300)
  let timer1 = setTimeout(function () {typeWriter(txt_3, i, speed, "demo_3")}, speed*txt_1.length+speed*txt_2.length+300)
  let timer10 = setTimeout(function () {}, speed*txt_1.length+speed*txt_2.length+300+speed*txt_3.length+300);
}

final_text()


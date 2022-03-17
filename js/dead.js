function dead(refreshTime, paragraph, txt_1){
    document.body.innerHTML = "<br><p class=\"demo\" id=\"demo_1\"></p><br>";
    document.body.innerHTML += "<br><p class=\"demo\" id=\"demo_2\"></p><br>";
    document.body.innerHTML += "<br><p class=\"demo\" id=\"demo_3\"></p><br>";
    var i = 0;
    var speed = 80;
    typeWriter(txt_1, i, speed, paragraph);
    //setTimeout(function () {location.reload()}, refreshTime);
  }

  function typeWriter(txt,i,speed,paragraph){  
    if (i < txt.length){
      document.getElementById(paragraph).innerHTML += txt.charAt(i);
      i+=1;
      setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
      }
  }
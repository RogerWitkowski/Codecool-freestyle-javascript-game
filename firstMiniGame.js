String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function questions() {
    clean_page()
    txt_1 = "Volodimir: Type in your name!";
    i = 0;
    speed = 50;
    typeWriter(txt_1, i, speed, "demo_1");
    
    document.getElementById("submit").onclick = function(){
        var myName = document.getElementById("userinput").value;
        myNameCheck1(myName);
    }
}

function clean_page(){
    document.body.innerHTML = "<br><p class=\"demo\" id=\"demo_1\"></p><br>";
    document.body.innerHTML += "<input type=\"text\" placeholder =\"Type here\" id=\"userinput\"><br><br>";
    document.body.innerHTML += "<button type=\"submit\" id=\"submit\">click me</button><br>";
}

function myNameCheck1(myName){
    if (myName === "your name"){
        alert("well done");
        yourRealName()
    } else {
        alert("You ded");
    }
}

function yourRealName(){
    clean_page()
    document.getElementById("submit").onclick = function(){
        var myName = document.getElementById("userinput").value;
        myNameCheck2(myName);
    }
    txt_1 = "Volodimir: Type  now your REAL name!";
    i = 0;
    speed = 50;
    typeWriter(txt_1, i, speed, "demo_1");
}

function myNameCheck2(myName){
    if (myName === "your real name"){
        alert("You ded");
    } else {
        var myNameFalse = randomizeName(myName);
        yourNameIs(myNameFalse);
    }
}

function randomizeName(myName){
    var myNameLenght = myName.length;
    var myNameFalse = myName.replaceAt(2, "!");
    return myNameFalse;
}

function yourNameIs(myNameFalse){
    clean_page()
    document.getElementById("submit").onclick = function(){
        var answer1 = document.getElementById("userinput").value;
        whatIsYourAge(answer1);
    }
    txt_1 = "Volodimir: So your name is " + myNameFalse +"! Yes?";
    i = 0;
    speed = 50;
    typeWriter(txt_1, i, speed, "demo_1");
}

function whatIsYourAge(answer1){
    clean_page()
    document.getElementById("submit").onclick = function(){
        var age = document.getElementById("userinput").value;
        var response = soYourAgeIs(age);
        confirmAge(response, answer1);
    }
    txt_1 = "Volodimir: How old are you?";
    i = 0;
    speed = 50;
    typeWriter(txt_1, i, speed, "demo_1");
}
function soYourAgeIs(age){
    if (age < 18){
        var response = "You are to young to live here";
        console.log(response);
    } else if (age > 80){
        var response = "You are to old to live here";
        console.log(response);
    } else {
    var falseAge = 20+parseInt(age);
    var response = "So your age is " + falseAge + "! Yes?";
    console.log(response);
    return response;
    }
}
function confirmAge(response, answer1){
    clean_page()
    document.getElementById("submit").onclick = function(){
        var answer2 = document.getElementById("userinput").value;
        checkAnswers(answer1, answer2);
    }
    i = 0;
    speed = 50;
    typeWriter(response, i, speed, "demo_1");
}

function checkAnswers(answer1, answer2){
    if (answer1 == "no"){
        var narrator = "Your name is good"
        alert("You good")
    } else {
        var narrator = "Your id says something else."
        alert("You ded.")
    }
    if(answer2 == "no"){
        var narrator = "Your age is good"
        alert("You good")
    } else {
        var narrator = "Your id says something else."
        alert("You ded.")
    }
}
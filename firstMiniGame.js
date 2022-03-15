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
    document.body.innerHTML += "<input type=\"text\" placeholder =\"Type Your name\" id=\"userinput\"><br>";
    document.body.innerHTML += "<button type=\"submit\" id=\"submit\">click me</button><br>";
}

function myNameCheck1(myName){
    if (myName === "your name"){
        alert("well done")
        yourRealName()
    } else {
        alert("You ded")
    }
}

function myNameCheck2(myName){
    if (myName === "your real name"){
        alert("You ded")
    } else {
        alert("You")
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
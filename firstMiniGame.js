function questions() {
    document.body.innerHTML = "<br><p class=\"demo\" id=\"demo_1\"></p><br>";
    document.body.innerHTML += "<input type=\"text\" placeholder =\"Type Your name\" id=\"userinput\"><br>";
    document.body.innerHTML += "<button type=\"submit\" id=\"submit\">click me</button>";
    txt_1 = "Volodimir: Type in your name!";
    i = 0;
    speed = 50;
    typeWriter(txt_1, i, speed, "demo_1");
    
    document.getElementById("submit").onclick = function(){
        var myName = document.getElementById("userinput").value;
        myNameCheck(myName);
    }
}

function myNameCheck(myName){
    if (myName === "your name"){
        alert("well done")
    } else {
        alert("Try again!")
    }
}
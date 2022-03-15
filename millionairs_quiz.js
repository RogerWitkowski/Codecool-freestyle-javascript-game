function typeWriter(txt,i,speed,paragraph){
  if (i < txt.length) {
    document.getElementById(paragraph).innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
    }
}

function intro(){ // if you want to add text; Create a new var with your text; duplicate the function with your variables; set the fourth parameter to demo_3 etc
    narrator = document.getElementById('paragraph')
  narrator.innerHTML = '<p class="demo" id="demo_1"></p><p class="demo" id="demo_2"></p><p class="demo" id="demo_3"></p><p class="demo" id="demo_4"></p>';
  var txt_1 = 'A few questions ahead of you';
  var txt_2 = 'If you answer the questions correctly, you may survive.'
  var speed = 40;
  var i = 0;
  typeWriter(txt_1, i, speed, "demo_1")
  let timer = setTimeout(function () {typeWriter(txt_2, i, speed, "demo_2")}, speed*txt_1.length+200)
    // narrator.remove()
}


intro()

const questions = ["What is the best news source?", "What is the best way to steal a tank?", "What ist the best anti airforce missles?", "A friend in need is a friend"]
const answers_q1 = ["Tik Tok", "Instagram", "Facebook", "Russian Propaganda"]
const answers_q2 = ["Car", "Shout idi na hui", "Tractor", "Watch TikTok"]
const answers_q3 = ["Jar with pickles","Stinger","Kalashnikov","Anonymous hacking"]
const answers_q4 = ["Indeed","Indic","In deep","In dead"]
const answers_q5 = ["Indeed","Indic","In deep","In dead"]

correct = false

question = document.getElementById("question")
answer1_label = document.getElementById("answer1_label")
answer1 = document.getElementById("answer1")
answer2_label = document.getElementById("answer2_label")
answer2 = document.getElementById("answer2")
answer3_label = document.getElementById("answer3_label")
answer3 = document.getElementById("answer3")
answer4_label = document.getElementById("answer4_label")
answer4 = document.getElementById("answer4")


function change_text (){
    console.log ('ebe')
    if (question.innerText == "") {question.innerText = questions [0],
        answer1_label.innerText = answers_q1 [0]
        answer2_label.innerText = answers_q1 [1]
        answer3_label.innerText = answers_q1 [2]
        answer4_label.innerText = answers_q1 [3]
        correct=false}
    else if (question.innerText == questions [0]) {question.innerText = questions [1],
        answer1_label.innerText = answers_q2 [0]
        answer2_label.innerText = answers_q2 [1]
        answer3_label.innerText = answers_q2 [2]
        answer4_label.innerText = answers_q2 [3]
        correct=false}
    else if (question.innerText == questions [1]) {question.innerText = questions [2],
        answer1_label.innerText = answers_q3 [0]
        answer2_label.innerText = answers_q3 [1]
        answer3_label.innerText = answers_q3 [2]
        answer4_label.innerText = answers_q3 [3]
        correct=false}
    else if (question.innerText == questions [2]) {question.innerText = questions [3],
        answer1_label.innerText = answers_q4 [0]
        answer2_label.innerText = answers_q4 [1]
        answer3_label.innerText = answers_q4 [2]
        answer4_label.innerText = answers_q4 [3]
        correct=false}

}

function check_correct (){
    if (question.innerText == questions [0] && answer4.checked) {correct = true}
    else if (question.innerText == questions [1] && answer3.checked) {correct = true}
    else if (question.innerText == questions [2] && answer1.checked) {correct = true}
    else if (question.innerText == questions [3] && answer2.checked) {correct = true}
    else {correct = false}

}

function check_answer (){
     if (correct == true && question.innerText == questions [3]) {alert('You\'re lucky, you\'re still alive. We will see how long it will be possible.')}
if (correct == true) {change_text()} else {alert('Uuu wrong answer. You better hurry up.')}
}
change_text ()








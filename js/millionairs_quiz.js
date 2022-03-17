function typeWriter(txt,i,speed,paragraph){
  if (i < txt.length) {
    document.getElementById(paragraph).innerHTML += txt.charAt(i);
    i+=1;
    setTimeout(function() {  typeWriter(txt,i,speed, paragraph) }, speed);
    }
}

function intro_millionairs(){ // if you want to add text; Create a new var with your text; duplicate the function with your variables; set the fourth parameter to demo_3 etc
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


intro_millionairs()

const questions = ["What is the best news source?", "What is the best way to steal a tank?", "What ist the best anti airforce missles?", "A friend in need is a friend", "Least useful subject in school:", "More that one animal:", "What is the first letter of Alphabet?"]
const answers_q1 = ["a) Tik Tok", "b) Instagram", "c) Facebook", "d) Russian Propaganda"]
const answers_q2 = ["a) Car", "b) Shout idi na hui", "c) Tractor", "d) Watch TikTok"]
const answers_q3 = ["a) Jar with pickles","b) Stinger","c)Kalashnikov","d)Anonymous hacking"]
const answers_q4 = ["a) Indeed","b) Indic","c) In deep","d) In dead"]
const answers_q5 = ["a) Sandwich","b) History","c) Pencil","d) Chemistry"]
const answers_q6 = ["a) Sheep","b) Herd","c) Two animals","d) Lama"]
const answers_q7 = ["a) B","b) A","c) D","d) B"]


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
    else if (question.innerText == questions [3]) {question.innerText = questions [4],
        answer1_label.innerText = answers_q5 [0]
        answer2_label.innerText = answers_q5 [1]
        answer3_label.innerText = answers_q5 [2]
        answer4_label.innerText = answers_q5 [3]
        correct=false}
    else if (question.innerText == questions [4]) {question.innerText = questions [5],
        answer1_label.innerText = answers_q6 [0]
        answer2_label.innerText = answers_q6 [1]
        answer3_label.innerText = answers_q6 [2]
        answer4_label.innerText = answers_q6 [3]
        correct=false}
    else if (question.innerText == questions [5]) {question.innerText = questions [6],
        answer1_label.innerText = answers_q7 [0]
        answer2_label.innerText = answers_q7 [1]
        answer3_label.innerText = answers_q7 [2]
        answer4_label.innerText = answers_q7 [3]
        correct=false}

}

function check_correct (){
    if (question.innerText == questions [0] && answer4.checked) {correct = true}
    else if (question.innerText == questions [1] && answer3.checked) {correct = true}
    else if (question.innerText == questions [2] && answer1.checked) {correct = true}
    else if (question.innerText == questions [3] && answer2.checked) {correct = true}
    else if (question.innerText == questions [4] && answer1.checked) {correct = true}
    else if (question.innerText == questions [5] && answer4.checked) {correct = true}
    else if (question.innerText == questions [6] && answer2.checked) {correct = true}
    else {correct = false}

}

function check_answer (){
     if (correct == true && question.innerText == questions [6]) {alert('You\'re lucky, you\'re still alive. We will see how long it will be possible.'), setTimeout(function() {  window.location.href="endscreen.js.html"; }, 4000);}
if (correct == true) {change_text()} else {alert('Uuu wrong answer. Bye bye!.'), setTimeout(function() {  window.location.href="preview.html"; }, 2000);}

}
change_text ()

// function putin_call (){
//     putin = document.getElementById("putin")
//     putin.src = "putin_call.jpeg"
//         if (question.innerText == questions [0]) {correct = true}
//     else if (question.innerText == questions [1]) {correct = true}
//     else if (question.innerText == questions [2]) {correct = true}
//     else if (question.innerText == questions [3]) {correct = true}
//     else if (question.innerText == questions [4]) {correct = true}
//     else if (question.innerText == questions [5]) {correct = true}
//     else if (question.innerText == questions [6]) {correct = true}
//     else {correct = false}
// }








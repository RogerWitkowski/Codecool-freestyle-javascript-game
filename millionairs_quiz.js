const questions = ["What is the best news source?", "What is the best way to steal a tank?", "What ist the best anti airforce missles?"]
const answers_q1 = ["Tik Tok", "Instagram", "Facebook", "Russian Propaganda"]
const answers_q2 = ["Car", "Shout idi na hui", "Tractor", "Watch TikTok"]
const answers_q3 = ["Jar with pickles","Stinger","Kalashnikov","Anonymous hacking"]

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
        answer4_label.innerText = answers_q1 [3]}
    else if (question.innerText == questions [0]) {question.innerText = questions [1],
        answer1_label.innerText = answers_q2 [0]
        answer2_label.innerText = answers_q2 [1]
        answer3_label.innerText = answers_q2 [2]
        answer4_label.innerText = answers_q2 [3]}
    else if (question.innerText == questions [1]) {question.innerText = questions [2],
        answer1_label.innerText = answers_q3 [0]
        answer2_label.innerText = answers_q3 [1]
        answer3_label.innerText = answers_q3 [2]
        answer4_label.innerText = answers_q3 [3]}

}

function check_correct (){
    if (question.innerText == questions [0] && answer4.checked) {correct = true}
    else if (question.innerText == questions [1] && answer3.checked) {correct = true}
    else if (question.innerText == questions [2] && answer1.checked) {correct = true}
    else {correct = false}

}

function check_answer (){
if (correct == true) {change_text()}
}
change_text ()





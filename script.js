let questions = document.querySelector("#question");
let answers = document.querySelector("#answers");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");

let secondsLeft = 70;

let questionsSet = [
    {
        question:"Commonly used data do NOT include:",
        answers: ["Blah", "Cheese", "Computer Sounds", "All the above"],
        correct: "All the above",
    },
    {
        question: "Arrays in Javascript can be used to store __", 
        answers: ["Blah", "String Cheese", "Yogurt", "Strings"],
        correct: "Strings",
    }, 

    {
        question: "The conditions in an if/then statement is enclosed within __",
        answers: ["cake", "shrimp", "food poisoning", "curly brackets"],
        correct: "curly brackets",
}   
];
 
let index = 0;

function newQuestion () {
    if (index < questionsSet.length) {
    questions.textContent = questionsSet[index].question
    answer1.textContent = questionsSet[index].answers[0]
    answer2.textContent = questionsSet[index].answers[1]
    answer3.textContent = questionsSet[index].answers[2]
    answer4.textContent = questionsSet[index].answers[3]
    
    index++
    } else {
        document.getElementById("question").style = "display: none"
        document.getElementById("answers").style = "display: none"
        document.getElementById("scoreSection").style = "display: block"

    }
};

let submitButton = document.querySelector("#submitScore");


let answerbutton = document.querySelectorAll(".ans");

for (var i = 0; i < answerbutton.length; i++) {
answerbutton[i].addEventListener("click", newQuestion)
}

newQuestion();

let timerEl = document.getElementById("timer")
timerEl.textContent = secondsLeft

let timer = setInterval(function () {
    secondsLeft--
    timerEl.textContent = secondsLeft  
   } 
,1000)



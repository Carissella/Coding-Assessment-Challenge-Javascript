let questions = document.querySelector("#question");
let answers = document.querySelector("#answers");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let scoreBoard = document.getElementById("list");
let submitButton = document.querySelector("#submitScore");
let answerbutton = document.querySelectorAll(".ans");
let timerEl = document.getElementById("timer")
let startButton = document.createElement("button");
let rootEl = document.getElementById("root");
rootEl.appendChild(startButton);

//startButton.addEventListener("click"), function() {
    

let secondsLeft = 70;

timerEl.textContent = secondsLeft



let questionsSet = [
    {
        question: "Commonly used data do NOT include:",
        answers: ["Decimals", "Food", "Computer Sounds", "All the above"],
        correct: "All the above",
        incorrect: ["Decimals", "Food", "Computer Sounds",]
    },
    {
        question: "Arrays in Javascript can be used to store __",
        answers: ["Functions", "If/Then Statements", "Booleans", "Strings"],
        correct: "Strings",
        incorrect: ["Functions", "If/Then Statements", "Booleans",]
    },

    {
        question: "The conditions in an if/then statement is enclosed within __",
        answers: ["Square Brackets", "Parenthesis", "Quotation Marks", "curly brackets"],
        correct: "curly brackets",
        incorrect: ["Square Brackets", "Parenthesis", "Quotation Marks",]
    },
    {
        question: "What does the .pop method do to an array?",
        answers: ["Adds a new value", "Removes a value", "Creates a new array", "Duplicates the array"],
        correct: "Removes a value",
        incorrect: ["Adds a new value", "Creates a new array", "Duplicates the array"]
    },
    {
        question: "What does Hyper Text Markup Language abbreviate to?",
        answers: ["CSS", "SQL", "HTML", "JavaScript"],
        correct: "HTML",
        incorrect: ["CSS", "SQL", "JavaScript"]
    },
    {
        question: "What Jquery code gets all elements with the Fish ID?",
        answers: [""],
        correct: "",
        incorrect: [""]
    },

];

let timer = setInterval(function () {
    secondsLeft--
    timerEl.textContent = secondsLeft
}
    , 1000)


let index = 0;

function newQuestion() {
    let questionIndex = 0;
    if (index < questionsSet.length) {
        if (this.textContent != questionsSet[index].incorrect) {
            secondsLeft -= 10
        }
        questions.textContent = questionsSet[index].question
        answer1.textContent = questionsSet[index].answers[0]
        answer2.textContent = questionsSet[index].answers[1]
        answer3.textContent = questionsSet[index].answers[2]
        answer4.textContent = questionsSet[index].answers[3]

        index++
        questionIndex++
    } else {
        document.getElementById("question").style = "display: none"
        document.getElementById("answers").style = "display: none"
        document.getElementById("scoreSection").style = "display: block"

        clearInterval(timer)
    }
};

let saveScore = document.getElementById("submitScore");
saveScore.addEventListener("click", function () {
    let initials = document.getElementById("initials");
    localStorage.setItem(initials.value, secondsLeft);
    scoreBoard.style = "display: block";
    document.getElementById("scoreSection").style = "display: none";
    for (let i = 0; i < localStorage.length; i++) {
        let li = document.createElement("li");
        li.textContent = localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i));
    scoreBoard.appendChild(li);
    console.log(localStorage.key(i))
        
    }
})


for (var i = 0; i < answerbutton.length; i++) {
    answerbutton[i].addEventListener("click", newQuestion)
}

newQuestion();





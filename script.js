let questions = document.querySelector("#question");
let answers = document.querySelector("#answers");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let scoreBoard = document.getElementById("list");

let secondsLeft = 70;

let questionsSet = [
    {
        question: "Commonly used data do NOT include:",
        answers: ["Blah", "Cheese", "Computer Sounds", "All the above"],
        correct: "All the above",
        incorrect: ["Blah", "Cheese", "Computer Sounds",]
    },
    {
        question: "Arrays in Javascript can be used to store __",
        answers: ["Blah", "String Cheese", "Yogurt", "Strings"],
        correct: "Strings",
        incorrect: ["Blah", "String Cheese", "Yogurt",]
    },

    {
        question: "The conditions in an if/then statement is enclosed within __",
        answers: ["cake", "shrimp", "food poisoning", "curly brackets"],
        correct: "curly brackets",
        incorrect: ["cake", "shrimp", "food poisoning",]
    }
];

let timer = setInterval(function () {
    secondsLeft--
    timerEl.textContent = secondsLeft
}
    , 1000)


let index = 0;

function newQuestion() {
    let questionIndex = 0;
    console.log(this.textContent);
    console.log(questionsSet[questionIndex].correct)
    console.log(questionIndex)
    if (index < questionsSet.length) {
        if (this.textContent !== questionsSet[index].correct) {
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
    document.getElementById("scoreSection").style = "display: none"
    for (let i = 0; i < localStorage.length; i++) {
        let li = document.createElement("li");
        li.textContent = localStorage.key(i) + ": " + localStorage.getItem(localStorage.key(i));
    scoreBoard.appendChild(li);
    console.log(localStorage.key(i))
        
    }
})

let submitButton = document.querySelector("#submitScore");


let answerbutton = document.querySelectorAll(".ans");

for (var i = 0; i < answerbutton.length; i++) {
    answerbutton[i].addEventListener("click", newQuestion)
}

newQuestion();

let timerEl = document.getElementById("timer")
timerEl.textContent = secondsLeft




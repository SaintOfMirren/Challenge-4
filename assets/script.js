// const quizQuestions = document.getElementById("quiz-questions");

// var countdown = 30;
// var expired = setInterval(function () {
//     var timer = document.getElementById("timer").innerHTML = countdown;
//     timer--;
//     var showScore = document.getElementById("score");
//     if (countdown == 0) {
//         question1.style.display = "none";
//         question2.style.display = "none";
//         question3.style.display = "none";
//         question4.style.display = "none";
//         question5.style.display = "none";
//         showScore.style.display = "block";
//         timer.innerHTML = "expired!";
//     } else {
//         if (countdown < 10) {
//             countdown = 0 + '' + countdown;
//         }
//         countdown -= 1;
//     }

// }, 1000);

var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");
var question5 = document.getElementById("question5");
var countdown;
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("")
var timer = document.getElementById("timer");
startButton.addEventListener("click", startCountdown);
// stopButton.addEventListener("click", function() {
//     clearInterval(countdown);
// });

function startCountdown() {
    var secondsLeft = 30;
    if (startFunction) {
        var showScore = document.getElementById("score");
        countdown = setInterval(function() {
            if (secondsLeft == 0) {
                clearInterval(countdown);
                question1.style.display = "none";
                question2.style.display = "none";
                question3.style.display = "none";
                question4.style.display = "none";
                question5.style.display = "none";
                showScore.style.display = "block";
            } else {
                if (secondsLeft < 10) {
                    secondsLeft = 0 + '' + secondsLeft;
                    timer.style.display = "block";
                    timer.textContent = secondsLeft;
                    secondsLeft--;
                }
                secondsLeft -= 1;
            }
            
        }, 1000);
    }
}


function startFunction() {
    var question1 = document.getElementById("question1");
    question1.style.display = "block";
}

function questionTwo() {
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    question2.style.display = "block";
    question1.style.display = "none";
}

function questionThree() {
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question3.style.display = "block";
    question2.style.display = "none";
    question1.style.display = "none";
}

function questionFour() {
    var question4 = document.getElementById("question4");
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question4.style.display = "block";
    question3.style.display = "none";
    question2.style.display = "none";
    question1.style.display = "none";
}

function questionFive() {
    var question5 = document.getElementById("question5");
    var question4 = document.getElementById("question4");
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question5.style.display = "block"
    question4.style.display = "none";
    question3.style.display = "none";
    question2.style.display = "none";
    question1.style.display = "none";
}

function finalQuestion() {
    var question5 = document.getElementById("question5");
    var question4 = document.getElementById("question4");
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    var scoreResults = document.getElementById("score");
    question5.style.display = "none"
    question4.style.display = "none";
    question3.style.display = "none";
    question2.style.display = "none";
    question1.style.display = "none";
    timer.style.display = "none";
    scoreResults.style.display = "block";
    setTimeout(function() {

    })

};

function saveText() {
    var text = prompt("Please enter your initials");
    if (text !== null && text !== "") {
      localStorage.setItem("savedText", text);
    }
};

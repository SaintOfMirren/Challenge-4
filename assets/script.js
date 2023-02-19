
// declare global variables to be used in multiple functions
var finalQuestionAnswered = false;
var countdown = 0;
var correctAnswers = 0;
var scoreResults = document.getElementById("score");

// create the fuction to start the timer on start button click and show the first question
function startFunction() {
    correctAnswers = 0;
    countdown = 30;
    var question1 = document.getElementById("question1");
    var showScore = document.getElementById("score");
    question1.style.display = "block";
    timer.style.display = "block";
    var expired = setInterval(function () {
        countdown--;
        document.getElementById("timer").innerHTML = countdown;
        if (countdown <= 0) {
            clearInterval(expired);
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            question5.style.display = "none";
            showScore.style.display = "none";

            timer.innerHTML = "expired!";
        }
        if (finalQuestionAnswered == true) {
            clearInterval(expired);
        }
    }, 1000);
    
}
// Evaluate the first answer, hide the first question and show the 2nd question
function evaluateQuestionOne(answer) {
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    question2.style.display = "block";
    question1.style.display = "none";
    if (answer != 2) {
        countdown = countdown -5;
    }
    if (answer == 2) {
        correctAnswers++;
    }
}

// Evaluate the 2nd answer, hide the 2nd question and show the 3rd question
function evaluateQuestionTwo(answer) {
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question3.style.display = "block";
    question2.style.display = "none";
    question1.style.display = "none";
    if (answer != 3) {
        countdown = countdown -5;
    }
    if (answer == 3) {
        correctAnswers++;
    }
}

// Evaluate the 3rd answer, hide the 3rd question and show the 4th question
function evaluateQuestionThree(answer) {
    var question4 = document.getElementById("question4");
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question4.style.display = "block";
    question3.style.display = "none";
    question2.style.display = "none";
    question1.style.display = "none";
    if (answer != 2) {
        countdown = countdown -5;
    }
    if (answer == 2) {
        correctAnswers++;
    }
}

// Evaluate the 4th answer, hide the 4th question and show the 5th question
function evaluateQuestionFour(answer) {
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
    if (answer != 1) {
        countdown = countdown -5;
    }
    if (answer == 1) {
        correctAnswers++;
    }
}

// Evaluate the 5th answer, stop the timer, hide all questions prompt the initials input
// Save the initials and score in local storage
function evaluateQuestionFive(answer) {
    if (answer == 1) {
        correctAnswers++;
    }
    var initials = prompt("Enter your initials");
    if (initials) {
        localStorage.setItem("initials", initials);
        displaySavedInitials();
    }

    finalQuestionAnswered = true;
    var question5 = document.getElementById("question5");
    var question4 = document.getElementById("question4");
    var question2 = document.getElementById("question2");
    var question1 = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question5.style.display = "none"
    question4.style.display = "none";
    question3.style.display = "none";
    question2.style.display = "none";
    question1.style.display = "none";
    timer.style.display = "none";
    scoreResults.style.display = "block";
}

// create and append the list item with the latest saved initials and score to be displayed
function displaySavedInitials(text) {
    var savedInitials = localStorage.getItem("initials");
    var scores = document.createElement("li");
    var newInitials = document.createTextNode(savedInitials + " Correct" + " " + correctAnswers);
    scores.appendChild(newInitials);
    var list = document.getElementById("scores");
    list.appendChild(scores);
    // document.getElementById("score").appendChild(scores);
};


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



function startFunction() {
    var question1 = document.getElementById("question1");
    question1.style.display = "block";
    var countdown = 30;
    timer.style.display = "block";
    var expired = setInterval(function () {
        var timer = document.getElementById("timer").innerHTML = countdown;
        timer--;
        var showScore = document.getElementById("score");
        if (countdown == 0) {
            question1.style.display = "none";
            question2.style.display = "none";
            question3.style.display = "none";
            question4.style.display = "none";
            question5.style.display = "none";
            showScore.style.display = "block";
            prompt
        } else {
            if (countdown < 10) {
                countdown = 0 + '' + countdown;
            }
            countdown -= 1;
        }

    }, 1000);
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

// quizQuestions.addEventListener('click', function (e) {
//     questionTwo();
//     e.stopPropagation();
// });
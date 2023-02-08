const quizQuestions = document.getElementById("quiz-questions");



function startFunction() {
    var questionOne = document.getElementById("question1");
    questionOne.style.display = "block";
}

function questionTwo(event) {
    var question2 = document.getElementById("question2");
    var questionOne = document.getElementById("question1");
    question2.style.display = "block";
    questionOne.style.display = "none";
}

function questionThree() {
    var question2 = document.getElementById("question2");
    var questionOne = document.getElementById("question1");
    var question3 = document.getElementById("question3");
    question3.style.display = "block";
    question2.style.display = "none";
    questionOne.style.display = "none";
}

quizQuestions.addEventListener('click', function (e) {
    questionTwo();
    e.stopPropagation();
});
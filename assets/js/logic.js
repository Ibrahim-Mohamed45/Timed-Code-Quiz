var startQuiz = document.querySelector('#start');
var timerText = document.querySelector(".timer");
var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var questionChoices = document.querySelector('#choices');

var timeLeft = 80;
var timer;

startQuiz.addEventListener('click', function() {
    startScreen.setAttribute("class", "hide");
    questionScreen.setAttribute("class", "show");
    startTimer();
});

function startTimer() {
    timer = setInterval(function () {
      timeLeft--;
      timerText.textContent = 'Time: ' + timeLeft + ' seconds remaining';
      if (timeLeft === 1) {
        timerText.textContent = 'Time: ' + timeLeft + ' second remaining';
      }
      if (timeLeft === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}

let index = 0;
var correctAnswer;

function showQuestion() {
    var currentQuestion = questions[index]
    questionTitle.textContent = currentQuestion.question;

    var buttons = "";
    userOptions = currentQuestion.choices;
    correctAnswer = currentQuestion.correct;
  
    for (var key in userOptions) {
      buttons += `<button>${key}. ${userOptions[key]}</button>`;
      questionChoices.innerHTML = buttons;
    }
}

showQuestion()
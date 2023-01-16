const startQuiz = document.querySelector('#start');
const timerText = document.querySelector(".timer");
const startScreen = document.querySelector('#start-screen');
const questionScreen = document.querySelector('#questions');
const questionTitle = document.querySelector('#question-title');
const choices = document.querySelector('#choices');

var timeLeft = 80;
var timer;

startQuiz.addEventListener('click', function() {
    startScreen.style.display = 'none';
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


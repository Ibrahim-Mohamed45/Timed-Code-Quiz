var startQuiz = document.querySelector('#start');
var timertxt = document.querySelector(".timer");


var timeLeft = 70;
var timer;

startQuiz.addEventListener('click', function() {
    startTimer();
});

function startTimer() {
    timer = setInterval(function () {
      timeLeft--;
      timertxt.textContent = 'Time: ' + timeLeft + ' seconds remaining';
      if (timeLeft === 1) {
        timertxt.textContent = 'Time: ' + timeLeft + ' second remaining';
      }
      if (timeLeft === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
}
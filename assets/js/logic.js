var startQuiz = document.querySelector('#start');
var timerText = document.querySelector(".timer");
var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var endScreen = document.querySelector('#end-screen');
var questionTitle = document.querySelector('#question-title');
var questionChoices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var finalScore = document.querySelector("#final-score");
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');
var correctSound = new Audio('./assets/sfx/correct.wav')
var wrongSound =new Audio('./assets/sfx/incorrect.wav');

var timeLeft = 80;
var timer;

startQuiz.addEventListener('click', function () {
    startScreen.setAttribute('class', 'hide');
    questionScreen.setAttribute('class', 'show');
    feedback.setAttribute('class', 'feedback');
    startTimer();
});

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerText.textContent = 'Time: ' + timeLeft + ' seconds remaining';
        if (timeLeft === 1) {
            timerText.textContent = 'Time: ' + timeLeft + ' second remaining';
        }
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

let index = 0;
var correctAnswer;

function showQuestions() {
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

questionChoices.addEventListener("click", function (evt) {
    var userAnswer = evt.target;
    var userKey = userAnswer.innerText;
    var key = userKey.charAt();
    if (key === correctAnswer) {
        feedback.textContent = 'Correct!';
        correctSound.play()
        index++;
    }

    if (key !== correctAnswer) {

        feedback.textContent = 'Wrong!';
        wrongSound.play();

        if (timeLeft < 10) {
            timeLeft = 1;
            gameOver();
        } else {
            timeLeft -= 10;
        }
    }

    if (questions.length === index) {
        gameOver();
        clearInterval(timer);
    } else {
        showQuestions();
    }
});

var score;

function gameOver() {
    questionScreen.setAttribute('class', 'hide');
    feedback.setAttribute('class', 'hide');
    endScreen.setAttribute('class', 'show');
    score = timeLeft;
    finalScore.textContent = score;
}

var playerList = [];

function storage() {
    if (localStorage.highscore) {
      var highscore = JSON.parse(localStorage.getItem('highscore'));
      for (var i = 0; i < highscore.length; i++) {
        playerList.push(highscore[i]);
      }
      localStorage.clear();
    }
}
  
function storePlayers() {
    localStorage.setItem('highscore', JSON.stringify(playerList));
}

function submitScore() {
    
    // Alerts the user to enter initials if they leave input blank 
    if (initials.value == '') {
        alert('Please enter your initials');
    } else {
        initials = initials.value.toUpperCase();

        var playerObj = {
            initials: initials,
            score: score,
        };

        playerList.push(playerObj);

        storage();
        storePlayers();
    
    }
}


submitBtn.addEventListener('click', submitScore);

showQuestions();

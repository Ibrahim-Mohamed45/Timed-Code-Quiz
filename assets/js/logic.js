var startScreen = document.querySelector('#start-screen');
var questionScreen = document.querySelector('#questions');
var endScreen = document.querySelector('#end-screen');

var startQuiz = document.querySelector('#start');
var timerText = document.querySelector(".timer");

var questionTitle = document.querySelector('#question-title');
var questionChoices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var correctSound = new Audio('./assets/sfx/correct.wav')
var wrongSound =new Audio('./assets/sfx/incorrect.wav');

var finalScore = document.querySelector("#final-score");
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');


var timeLeft = 80;
var timer;

// Function which changes the class of the screens when the start button is pressed.
startQuiz.addEventListener('click', function () {
    startScreen.setAttribute('class', 'hide');
    questionScreen.setAttribute('class', 'show');
    feedback.setAttribute('class', 'feedback');
    showQuestions();
    startTimer();
});

// Function to start time and countdown from 80.
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

    // If users answered correctly the correct sound is played and adds 1 to the index which displays the next question.
    if (key === correctAnswer) {
        feedback.textContent = 'Correct!';
        correctSound.play();
        index++;
    }

    // If users answers incorrectly 10 seconds is subtacted from the time and the wrong sound is played.
    // If time left is less than 10 the game over function is triggered.
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

    // If all the questions are answered the game over function is triggered
    if (questions.length === index) {
        gameOver();
        clearInterval(timer);
    } else {
        showQuestions();
    }
});

var score;

// Function which changes the class of the screens and adds the score to the end screen.
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
      // Converts from JSON to object and push to playerList array.
      var highscore = JSON.parse(localStorage.getItem('highscore'));
      for (var i = 0; i < highscore.length; i++) {
        playerList.push(highscore[i]);
      }
      // Clears the local storage so there isn't duplication.
      localStorage.clear();
    }
}
  
function storePlayers() {
    // Player list array is sent to local storage as JSON.
    localStorage.setItem('highscore', JSON.stringify(playerList));
}

function submitScore() {
    
    // Alerts the user to enter initials if they leave input blank 
    if (initials.value == '') {
        alert('Please enter your initials');
    } else {
        initials = initials.value.toUpperCase();

        // Creates a new object with user initials and score.
        var playerObj = {
            initials: initials,
            score: score,
        };

        //Adds the object to the playerlist array
        playerList.push(playerObj);

        storage();
        storePlayers();
        
        // Clear the initials text input so it's empty next time.
        initials.value = '';
        // Changes the page to the highscore page.
        location.href = './highscores.html';
    }
}

submitBtn.addEventListener('click', submitScore);


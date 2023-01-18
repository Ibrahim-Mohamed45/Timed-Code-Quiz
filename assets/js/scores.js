var highScores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

var scores = [];

// Converts from JSON to object and push to score array.
var storage = JSON.parse(localStorage.getItem('highscore'));
for (var i = 0; i < storage.length; i++) {
  scores.push(storage[i]);
  // Sorts the score array in descending order.
  scores.sort((a, b) => b.score - a.score);
}

// Creates a new li for each score
for (var i = 0; i < scores.length; i++) {
  var player = scores[i];
  var li = document.createElement("li");
  li.textContent = `${player.initials} - Score: ${player.score}`;
  highScores.appendChild(li);
}

// Clears the local storage and reloads the page when the clear highscores button is pressed.
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});


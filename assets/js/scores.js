var highScores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");

var scores = [];
var storage = JSON.parse(localStorage.getItem('highscore'));

for (var i = 0; i < storage.length; i++) {
  scores.push(storage[i]);
  scores.sort((a, b) => b.score - a.score);
}

for (var i = 0; i < scores.length; i++) {
  var player = scores[i];
  var li = document.createElement("li");
  li.textContent = `${player.initials} - Score: ${player.score}`;
  highScores.appendChild(li);
}

clearBtn.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});


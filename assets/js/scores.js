var highScores = document.querySelector("#highscores");

var scores = [];
var storage = JSON.parse(localStorage.getItem('highscore'));

for (var i = 0; i < storage.length; i++) {
  scores.push(storage[i]);
}

for (var i = 0; i < scores.length; i++) {
  var player = scores[i];

  var li = document.createElement("li");
  li.textContent = `${player.initials} - Score: ${player.score}`;

  highScores.appendChild(li);

}

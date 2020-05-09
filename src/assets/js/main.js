import Animation from "./animation";
import Game from "./Game";
import Utils from "./utils";
import "../css/style.css";

// prevent form submit default
document
  .querySelector(".form-container")
  .addEventListener("submit", e => e.preventDefault());

// add click listeners to form buttons
document.querySelector(".btn-start").addEventListener("click", handleStart);
document
  .querySelector(".btn-leaderboard")
  .addEventListener("click", handleViewLeaderboard);

/**
 * Handle logics for when the start button is clicked
 */
function handleStart() {
  // create new game instance
  const game = new Game();

  // hide the form
  document.querySelector(".form-container").style.display = "none";

  // start the game
  game.start();

  // show the board
  document.querySelector(".board-container").style.display = "flex";
}

/**
 * Handle logics for when the view leaderboard button is clicked
 */
function handleViewLeaderboard() {
  updateLeaderboard();

  // hide the form
  document.querySelector(".form-container").style.display = "none";

  // show the leaderboard
  document.querySelector(".leaderboard-container").style.display = "block";

  // add click event listener for going back to the game
  document
    .querySelector(".btn-back")
    .addEventListener("click", handleBackToGame);
}

/**
 * Handle logics for going back to the game
 */
function handleBackToGame() {
  document.querySelector(".form-container").style.display = "block";
  document.querySelector(".leaderboard-container").style.display = "none";
}

/**
 * Handle logics for updating the leaderboard table
 */
function updateLeaderboard() {
  const tbody = document.querySelector(".leaderboard tbody");
  
  // Empty the table
  tbody.innerHTML = "";

  // retrieve player scores from the localstorage
  const playerScores =
    JSON.parse(localStorage.getItem("MEMORY_GAME_SCORE")) || [];

  // sort the player scores based on moves and time
  playerScores.sort(function(a, b) {
    if (a.moves < b.moves) return -1;
    if (a.moves > b.moves) return 1;
    if (a.seconds < b.seconds) return -1;
    if (a.seconds > b.seconds) return 1;
    return 0;
  });

  // keep only the top 10 scores
  if (playerScores.length > 10) playerScores.splice(10);
  localStorage.setItem("MEMORY_GAME_SCORE", JSON.stringify(playerScores));

  // load the scores to the table
  const fragment = document.createDocumentFragment();
  playerScores.forEach((score, index) => {
    const tr = document.createElement("tr"),
      positionTD = document.createElement("td"),
      playerTD = document.createElement("td"),
      ratingTD = document.createElement("td"),
      movesTD = document.createElement("td"),
      timeTD = document.createElement("td");

    positionTD.textContent = index + 1;
    playerTD.textContent = score.player;
    ratingTD.textContent = score.rating;
    movesTD.textContent = score.moves;
    timeTD.textContent = Utils.formatTime(score.seconds);

    tr.appendChild(positionTD);
    tr.appendChild(playerTD);
    tr.appendChild(ratingTD);
    tr.appendChild(movesTD);
    tr.appendChild(timeTD);

    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment);
}

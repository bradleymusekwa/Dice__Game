// Background animation
document.body.addEventListener("pointermove", (e) => {
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty("--posX", x - l - w / 2);
  el.style.setProperty("--posY", y - t - h / 2);
});

// Define global variables to track player scores and initialize them
let player1Score = 0;
let player2Score = 0;

// Define elDiceOne and elDiceTwo globally
let elDiceOne = document.getElementById("dice1");
let elDiceTwo = document.getElementById("dice2");

// Function to roll the dice
function rollDice() {
  let diceOne = Math.floor(Math.random() * 6 + 1);
  let diceTwo = Math.floor(Math.random() * 6 + 1);

  console.log(diceOne + " " + diceTwo);

  for (let i = 1; i <= 6; i++) {
    elDiceOne.classList.remove("show-" + i);
    if (diceOne === i) {
      elDiceOne.classList.add("show-" + i);
    }
  }

  for (let k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove("show-" + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add("show-" + k);
    }
  }
}

// Event handler for rolling the dice
let elComeOut = document.getElementById("roll");
elComeOut.onclick = function () {
  rollDice(); // Roll the dice
  updateScores(); // Update scores based on the dice rolls
  winnerOrDraw(); // Determine the winner or draw
};

let player1 = "Player 1";
let player2 = "Player 2";

// Function to change the player name
function editNames() {
  let player1Name = prompt("Change Player 1 name");
  let player2Name = prompt("Change Player 2 name");

  if (player1Name) {
    player1 = player1Name;
    document.querySelector(".player1").innerHTML = `${player1}: ${player1Score}`;
  }

  if (player2Name) {
    player2 = player2Name;
    document.querySelector(".player2").innerHTML = `${player2}: ${player2Score}`;
  }
}

// Add the updateScores function
function updateScores() {
  let diceOne = Math.floor(Math.random() * 6 + 1);
  let diceTwo = Math.floor(Math.random() * 6 + 1);

  // Update player scores here
  player1Score += diceOne;
  player2Score += diceTwo;

  // Display the updated scores on the HTML elements
  document.querySelector(".player1").innerHTML = `${player1}: ${player1Score}`;
  document.querySelector(".player2").innerHTML = `${player2}: ${player2Score}`;
}

// Add the winnerOrDraw function (you can customize this logic as needed)
function winnerOrDraw() {
  if (player1Score > player2Score) {
    document.querySelector("h1").innerHTML = `${player1} Wins!`;
  } else if (player2Score > player1Score) {
    document.querySelector("h1").innerHTML = `${player2} Wins! 🚩`;
  } else {
    document.querySelector("h1").innerHTML = "It's a draw! Play again";
  }
}

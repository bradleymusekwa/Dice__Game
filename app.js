//background animation
document.body.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})


let elDiceOne       = document.getElementById('dice1');
let elDiceTwo       = document.getElementById('dice2');
let elComeOut       = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  let diceOne   = Math.floor((Math.random() * 6) + 1);
  let diceTwo   = Math.floor((Math.random() * 6) + 1);
 
  console.log(diceOne + ' ' + diceTwo);

  for (let i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (let k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 
  setTimeout(rollDice(), 1000);
}


// Player name
let player1 = "Player 1";
let player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.player1")
                    .innerHTML = player1;
                    
    document.querySelector("p.player2")
                    .innerHTML = player2;
}
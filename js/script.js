var compScore = 0, playerScore = 0;

// Call functions according to player choices
document.getElementById('rock-btn').addEventListener('click', rockChoice);
document.getElementById('paper-btn').addEventListener('click', paperChoice);
document.getElementById('scissors-btn').addEventListener('click', scissorsChoice);

// Player selected rock and the choice value is set to 0
function rockChoice() {
  var compChoice = showCompResult();
  // Check for win
  if (compChoice === 0) {
    playerDraws();
  } else if (compChoice === 1) {
    playerLoses();
  } else {
    playerWins();
  }
}

// Player selected paper and the choice value is set to 1
function paperChoice() {
  var compChoice = showCompResult();
  // Check for win
  if (compChoice === 1) {
    playerDraws();
  } else if (compChoice === 2) {
    playerLoses();
  } else {
    playerWins();
  }
}

// Player selected scissors and the choice value is set to 2
function scissorsChoice() {
  var compChoice = showCompResult();
  // Check for win
  if (compChoice === 2) {
    playerDraws();
  } else if (compChoice === 0) {
    playerLoses();
  } else {
    playerWins();
  }
}

function showCompResult(){
  var resultText = document.getElementById('result-txt');
  // Gets a random number between 0 and 2
  var compChoice = Math.floor(Math.random() * 3);
  // Change img according to computer choice
  document.getElementById('result-img').src = 'img/comp-' + compChoice + '.png';
  // Change text according to computer choice
  switch (compChoice) {
    case 0:
      resultText.innerHTML = 'Rock';
      break;
    case 1:
      resultText.innerHTML = 'Paper';
      break;
    case 2:
      resultText.innerHTML = 'Scissors';
      break;
  }

  return compChoice;
}

function playerDraws() {
  var instructions = document.getElementById('instructions');
  instructions.innerHTML = 'It\'s a DRAW!';
  console.log(playerScore, compScore);
}

function playerWins() {
  var instructions = document.getElementById('instructions');
  instructions.innerHTML = 'YOU WIN!';
  playerScore++;
  console.log(playerScore, compScore);
}

function playerLoses() {
  var instructions = document.getElementById('instructions');
  instructions.innerHTML = 'YOU LOSE!';
  compScore++;
  console.log(playerScore, compScore);
}

// Reset button functionalities
document.getElementById('reset-btn').addEventListener('click', function () {
  alert('You clicked RESET!');
});
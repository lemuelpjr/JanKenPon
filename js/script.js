// Testing buttons for click event
document.getElementById('rock-btn').addEventListener('click', rockChoice);
document.getElementById('paper-btn').addEventListener('click', paperChoice);
document.getElementById('scissors-btn').addEventListener('click', scissorsChoice);

document.getElementById('reset-btn').addEventListener('click', function() {
  alert('You clicked RESET!');
});

// Player selected rock and the choice value is set to 0
function rockChoice() {
  // Gets a random number between 0 and 2
  var compChoice = Math.floor(Math.random() * 3);

  console.log(compChoice);
  if (compChoice === 0) {
    console.log('It is a draw!');
  } else if (compChoice === 1) {
    console.log('You lose!');
  } else {
    console.log('You win!');
  }
}

// Player selected paper and the choice value is set to 1
function paperChoice() {
  // Gets a random number between 0 and 2
  var compChoice = Math.floor(Math.random() * 3);

  console.log(compChoice);
  if (compChoice === 1) {
    console.log('It is a draw!');
  } else if (compChoice === 2) {
    console.log('You lose!');
  } else {
    console.log('You win!');
  }
}

// Player selected scissors and the choice value is set to 2
function scissorsChoice() {
  // Gets a random number between 0 and 2
  var compChoice = Math.floor(Math.random() * 3);

  console.log(compChoice);
  if (compChoice === 2) {
    console.log('It is a draw!');
  } else if (compChoice === 0) {
    console.log('You lose!');
  } else {
    console.log('You win!');
  }
}
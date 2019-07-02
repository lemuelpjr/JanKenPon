// Testing buttons for click event
document.getElementById('rock-btn').addEventListener('click', rockChoice);
document.getElementById('paper-btn').addEventListener('click', paperChoice);
document.getElementById('scissors-btn').addEventListener('click', scissorsChoice);

document.getElementById('reset-btn').addEventListener('click', function() {
  alert('You clicked RESET!');
});

// Player selected rock and the choice value is set to 0
function rockChoice() {
  var compChoice = showCompResult();
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
  var compChoice = showCompResult();
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
  var compChoice = showCompResult();
  if (compChoice === 2) {
    console.log('It is a draw!');
  } else if (compChoice === 0) {
    console.log('You lose!');
  } else {
    console.log('You win!');
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
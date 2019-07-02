// Testing buttons for click event
document.getElementById('rock-btn').addEventListener('click', function() {
  // Player selected rock and the value is set to 0
  winCheck(0);
});

document.getElementById('paper-btn').addEventListener('click', function() {
  // Player selected paper and the value is set to 1
  winCheck(1);
});

document.getElementById('scissors-btn').addEventListener('click', function() {
  // Player selected scissors and the value is set to 2
  winCheck(2);
});

document.getElementById('reset-btn').addEventListener('click', function () {
  alert('You clicked RESET!');
});

function winCheck(playerChoice) {
  // Gets a random number between 0 and 2
  var compChoice = Math.floor(Math.random() * 3);
  console.log(playerChoice, compChoice);
}
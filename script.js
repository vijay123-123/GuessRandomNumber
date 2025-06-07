const maxTries = 7;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attemptsLeft = document.getElementById("attemptsLeft");

  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Please enter a number between 1 and 100!";
    return;
  }

  attempts++;
  let remaining = maxTries - attempts;

  if (guess === randomNumber) {
    message.textContent = `Correct! The number was ${randomNumber}.`;
    endGame();
  } else if (attempts >= maxTries) {
    message.textContent = `Game Over! The number was ${randomNumber}.`;
    endGame();
  } else {
    message.textContent = guess < randomNumber ? "Too low!" : "Too high!";
    attemptsLeft.textContent = `Tries left: ${remaining}`;
  }

  guessInput.value = "";
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}

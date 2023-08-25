const playGuessingGame = (numToGuess, totalGuesses = 10) => {
  let result = 1;
  let message = "Enter a number between 1 and 100";

  let input = prompt(message);
  totalGuesses--;

  while (input != numToGuess) {
    if (input == null) {
      //user pressed cancel
      return 0;
    } else if (totalGuesses == 0) {
      return 0;
    } else if (isNaN(input)) {
      //user entered non-number
      input = prompt("Please enter a number");
    } else if (parseInt(input) < numToGuess) {
      //user entered smaller number
      message = input + " is too small. Guess a larger number.";
      input = prompt(message);
      totalGuesses--;
      result++;
    } else if (parseInt(input) > numToGuess) {
      //user entered bigger number
      message = input + " is too large. Guess a smaller number.";
      input = prompt(message);
      totalGuesses--;
      result++;
    } else if (input == numToGuess) {
      return result;
    }
  }

  return result;
};

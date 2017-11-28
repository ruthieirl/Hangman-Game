//Global Variables*******************************************

//Array of words
var wordsList = ["work", "diamonds", "umbrella", "rehab", "unfaithful", "consideration", "cockiness", "disturbia", "hard", "stay", "cheers", "higher"];
// Word of interest will be held here
var chosenWord = "";
// Break the words apart by letter and stored in an array
var lettersInChosenWord = [];
// Blanks to hold letter spaces
var numBlanks = 0;
// Holds blank letter spots and correctly picked letters
var blanksAndSuccesses = [];
// Holds all incorrect guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// FUNCTIONS*********************************************

function startGame() {
  // Reset
  numGuesses = 9;

  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  lettersInChosenWord = chosenWord.split("");

  numBlanks = lettersInChosenWord.length;

  // Testing
  console.log(chosenWord);

  // Resets
  blanksAndSuccesses = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  // Testing
  console.log(blanksAndSuccesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  // Blanks for chosen word that round
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // Clears wrong guesses from previous round
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


function checkLetters(letter) {

  // Is the letter in the chosen word?
  var letterInWord = false;

  // Does the letter exist in the word?
  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      // If the letter exists then toggle this boolean to true.
      letterInWord = true;
    }
  }

  // If the letter exists somewhere in the word, then figure out exactly where.
  if (letterInWord) {

    // Loop through the word.
    for (var j = 0; j < numBlanks; j++) {


      if (chosenWord[j] === letter) {
        // Here we set the specific space in blanks and letter equal to the letter when there is a match.
        blanksAndSuccesses[j] = letter;
      }
    }
    // Logging for testing.
    console.log(blanksAndSuccesses);
  }
  
  else {
    // The guess is incorrect. Add the letter to the list of wrong letters, and subtract one of the guesses.
    wrongGuesses.push(letter);
    numGuesses--;
  }
}

function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guesses-left").innerHTML = numGuesses;
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If we have gotten all the letters to match the solution...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
    // ..add to the win counter & give the user an alert.
    winCounter++;
    alert("You win!");

    // Update the win counter in the HTML & restart the game.
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose");

    // Update the loss counter in the HTML.
    document.getElementById("loss-counter").innerHTML = lossCounter;
    // Restart the game.
    startGame();
  }

}

// MAIN PROCESS****************************************************

startGame();

document.onkeyup = function(event) {

  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  // Run roundComplete();
  roundComplete();
};
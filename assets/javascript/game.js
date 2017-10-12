//Global Variables
//*************************************************************
var wordOptions = ["one", "two", "three", "four", "five", "six", "seven"]
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blankAndSuccess = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//Functions
//*************************************************************
function startGame() {
	
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	console.log(selectedWord);

	lettersInWord = selectedWord.split("");
	console.log(lettersInWord);

	numBlanks = lettersInWord.length;
	console.log(numBlanks);
	
	//Resets
	guessesLeft = 9;
	wrongLetters = [];
	blankAndSuccess = [];

	//Populate blanks
	for (var i = 0; i < numBlanks; i++) {
		blankAndSuccess.push("_");
		console.log(blankAndSuccess);
	};

	document.getElementById("wordToGuess").innerHTML = blankAndSuccess.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;

}
//Main Process
startGame();


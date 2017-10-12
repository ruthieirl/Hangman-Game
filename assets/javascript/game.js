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
}
//Main Process
startGame();


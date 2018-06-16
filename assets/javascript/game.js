var alphabet = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var guessesSoFar = [];

var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(compChoice);

document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();
    
    
    if(userGuess == compChoice) {
        wins++; 
        guesses = 10;
        guessesSoFar = [];
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(compChoice);
    }else {
        guesses--;
        guessesSoFar.push(userGuess);
    }

    if(guesses == 0) {
        losses++;
        guesses = 10;
        guessesSoFar = [];
        compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(compChoice);
    
    }

    document.getElementById('wins') .innerHTML = "Wins: " + wins;
    document.getElementById('losses') .innerHTML = "losses: " + losses;
    document.getElementById('guesses') .innerHTML = "Guesses left: " + guesses;
    document.getElementById('userGuess') .innerHTML = "Guesses so far: "  + (guessesSoFar);

   
}
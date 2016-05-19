
  //Generate the legal moves (anythin in the alphabet)
  var alphabet = chars('a', 'z');

  // Word back of names 
  var nameBank =['Billie Holiday', 'Ella Fitzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman', 'Gene Krupa', 'Jimmie Lunceford', 'Count Basie'];

  //Chooeses a random name form the word bank
  var selectName = chooseName(nameBank);

  // Gets the artist name ID container
  var artistName = document.getElementById('artistName');

  var wins = document.getElementById('winCount');

  var guessCount = document.getElementById('guessLeft');

  var guessLetter = document.getElementById('guessLetters');

  var gameboard =  document.getElementById('gameboard');

  //Where we store the user guesses
  var guesses = [];

  //Where we store the correct guesses
  var results = [];

  //Number of guesses left
  var guessLeft =  1;

  var winCount = 0; 

  //setting up the artist name to be guessed in blank tiles
  var result = blanks(results, selectName);

  hide('gameboard');

  //Event listener for user keypress
  document.onkeyup = function(event) {

    hide('welcomeMessage');

    show('gameboard');

    // stores user input in this variable, only accepts unique keys and valid keys
    var userGuess = uniqueGuess(keyVal(alphabet, String.fromCharCode(event.keyCode).toLowerCase()), guesses);

    // pushes the user input to the guessess array 
    guessVal(userGuess, guesses);

    //If the user guesses correctly it will reveal in the blank tiles where the letter was
    revealAt(userGuess, selectName, results, guessLeft);

    artistName.textContent = results;

    guessCount.innerText = guessLeft;

    guessLetter.innerText = guesses;

    wins.innerHTML = winCount;

    // document.getElementById('answer').innerText = selectName;

    winCondition(removeComma(results), selectName, guessLeft);

}
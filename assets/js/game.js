  
  //Generate the legal moves (anythin in the alphabet)
  var alphabet = alphabet('a', 'z');

  // Word back of names 
  var nameBank =['Billie Holiday', 'Ella Fitzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman', 'Gene Krupa', 'Jimmie Lunceford', 'Count Basie'];

  //Chooeses a random name form the word bank
  var selectName = chooseName(nameBank);

  // Gets the artist name ID container
  var artistName = document.getElementById('artistName');

  //Where we store the user guesses
  var guesses = [];

  //Where we store the correct guesses
  var results = [];

  //Number of guesses left
  var guessLeft =  2;

  //setting up the artist name to be guessed in blank tiles
  var result = blanks(results, selectName);

  //Event listener for user keypress
  document.onkeyup = function(event) {

    // stores user input in this variable, only accepts unique keys and valid keys
    var userGuess = uniqueGuess(keyVal(alphabet, String.fromCharCode(event.keyCode).toLowerCase()), guesses);

    // pushes the user input to the guessess array 
    guessVal(userGuess, guesses);

    //If the user guesses correctly it will reveal in the blank tiles where the letter was
    revealAt(userGuess, selectName, results, guessLeft);

    document.getElementById('artistName').textContent = results;

    document.getElementById('guessLeft').innerText = guessLeft;

    document.getElementById('guessLetters').innerText = guesses;

    // document.getElementById('answer').innerText = selectName;

    winCondition(removeComma(results), selectName, guessLeft);

}
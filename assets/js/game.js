  
  var alphabet = alphabet('a', 'z');

  var nameBank =['Billie Holiday', 'Ella Firtzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman', 'Gene Krupa', 'Jimmie Lunceford', 'Count Basie'];

  var selectName = chooseName(nameBank);

  // artist container
  var artistName = document.getElementById('artistName');


  var guesses =[];

  var results = [];

  var guessLeft =  9;

  var result = blanks(results, selectName);

  document.onkeyup = function(event) {

    // stores user input in this variable

    var userGuess = uniqueGuess(keyVal(alphabet, String.fromCharCode(event.keyCode).toLowerCase()), guesses);

    // pushes the user input to the guessess array 

    guessVal(userGuess, guesses, guessLeft);

    revealAt(guesses, selectName, results);

    document.getElementById('artistName').textContent = results;

    document.getElementById('guessLeft').innerText = guessLeft;

    document.getElementById('guessLetters').innerText = guesses;

    // revealAt(guesses, selectName, result);
    // artistName.textContent = result;

// document.getElementById('guessLetters').innerText = guesses;

}
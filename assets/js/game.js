

  var nameBank =['Billie Holiday', 'Ella Firtzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman', 'Gene Krupa', 'Jimmie Lunceford', 'Count Basie'];

  var selectName = chooseName(nameBank);
  var nameLength = selectName.length

  var artistName = document.getElementById('artistName');
  // artist container

  var guesses =['a', 'e', 'i', 'o', 'u'];

  var results = [];

  var guessLeft =  9;

  var result = blanks(results, nameLength);

  document.getElementById('guessLeft').innerText = guessLeft;



  revealAt(guesses, selectName, result);

  insertToDoc('guesses', 'guessLetters');

  artistName.textContent = result;

// document.getElementById('guessLetters').innerText = guesses;



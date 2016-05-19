  //Generate the legal moves (anythin in the alphabet)
  var alphabet = chars('a', 'z');

  // Word back of names 
  var nameBank =['Billie Holiday', 'Ella Fitzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman', 'Gene Krupa', 'Jimmie Lunceford', 'Count Basie'];

  //Chooeses a random name form the word bank
  var selectName = chooseName(nameBank);

  //Number of guesses left
  var gameGuessCount =  9;

  var guessLeft = gameGuessCount;

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

  var winCount = 0; 

  //setting up the artist name to be guessed in blank tiles
  var result = blanks(results, selectName);

  var resetEl = document.getElementById('reset');

  var playagain = true;
  
  // resetEl.addEventListener('click', reset()); 

//Generates an alphabet
function chars(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}

// fills in the blanks
function blanks(result, name) {
  var arrName = name.split('');
  for(i = 0; i < name.length; ++i) {
    if(arrName[i] == ' '){
      result.push(' ')
    }else{
    result.push('_');
    } 
  }  
}

// turns results array into a string
function stringify(arr){
  var string = arr.toString();
  return string.replace(/,/g, '');
}

//Choose a random name
function chooseName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }  

// for each element in guess iterate through the name 
function revealAt(userGuess, name, result){
  var arrName = name.split('');
  var miss = 0;
  for(i = 0; i < arrName.length; ++i){
    if(arrName[i].toLowerCase() == userGuess){
      result[i] = arrName[i];
    }
  }
  if((arrName.indexOf(userGuess) == -1) && (alphabet.indexOf(userGuess) != -1)){
    guessLeft--;
  }
} 

var isUnique = function(guess, guessed){
  if (guessed.indexOf(guess) === -1){
    return guess;
  }
}

//Will not allow letters you've guessed before
function uniqueGuess(guess, guessed){
  if (guessed.indexOf(guess) === -1){
    return guess;
  }
}

// Makes sure the guess is an letter in the alphabet
function keyVal(arr, key){
  if (arr.indexOf(key) == -1){  
  } else{
   return key;
  }
}

//pushes user guess to the guesses array 
function guessVal(letter, arr){
  if((arr.indexOf(letter) == -1) && letter != undefined){
    arr.push(letter);
  }else{
    console.log('you have already guessed this letter');
  }
}

//Removes all the commas from the results
function removeComma(arr){
  return arr.toString().replace(/\,/g,'');
}

function show(id){
  document.getElementById(id).style.display = 'block';
}

function hide(id){
  document.getElementById(id).style.display = 'none';
}


function winCondition(result, name, guess){
  if (result == name) {
    show('success');
    winCount = winCount + 1;
    wins.innerHTML = winCount;
    document.querySelector('.winMsg').textContent ='Congratulations you\'ve won!';
    return true;
  }else if (guess <= 0 ){
    show('fail');
    document.querySelector('.loseMsg').textContent ='Sorry you lost!';
    console.log('Sorry you lost');
  }
}

function reset(){

  //Chooeses a random name form the word bank
  selectName = chooseName(nameBank);

  //Where we store the user guesses
  guesses = [];

  //Where we store the correct guesses
  results = [];

  //Number of guesses left
  guessLeft =  gameGuessCount;

  //Chooeses a random name form the word bank
  selectName = chooseName(nameBank);

  artistName.textContent = results;

  var result = blanks(results, selectName);

  guessCount.innerText = guessLeft;

  guessLetter.innerText = guesses;

  document.querySelector('#success').style.display = 'none';

  document.querySelector('#fail').style.display = 'none';

  console.log('reset!');
}

function game(){
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


      winCondition(removeComma(results), selectName, guessLeft);
      // document.getElementById('answer').innerText = selectName;

  }
}

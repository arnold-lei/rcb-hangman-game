
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
    }else if (arrName[i] != ','){
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

var show = function(id){
  document.getElementById(id).style.display = 'block';
}

var hide = function(id){
  document.getElementById(id).style.display = 'none';
}

function winCondition(result, name, guess){
  if (result == name) {
    show('success');
    document.getElementById('success').textContent ='Congratulations you\'ve won!';
  }else if (guess <= 0 ){
    show('fail');
    document.getElementById('fail').textContent ='Sorry you lost!';
    console.log('Sorry you lost');
  }
}



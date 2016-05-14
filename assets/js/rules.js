
//Generates an alphabet
function alphabet(charA, charZ) {
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

function chooseName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }  

// for each element in guess iterate through the name 
// function revealAt(guessed, name, result, guess){
//   for (i = 0; i < name.length; ++i){
//     for (x = 0; x < guessed.length; ++x){
//       if ((guessed[x] === name[i].toLowerCase()) || (name[i] === ' ')){
//        result[i] = name[i];
//       } else{
//         guess = guess - 1;
//       }
//     }
//   }
// }

// for each element in guess iterate through the name 
function revealAt(userGuess, name, result){
  var arrName = name.split('');
  var miss = 0;
  for(i = 0; i < arrName.length; ++i){
    if(arrName[i].toLowerCase() == userGuess){
      result[i] = arrName[i];
    }
  }
  if(arrName.indexOf(userGuess) == -1){
    guessLeft--;
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

function winCondition(result, name, guess){
  if (result == name) {
   console.log('Congratulations you\'ve won!');
  }else if (guess <= 0 ){
    console.log('Sorry you lost');
  }
}

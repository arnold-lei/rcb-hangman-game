
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
  for(i = 0; i < name.length; ++i) {
    result.push(' ' + '_' + ' ');
    }   
  }

function chooseName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }  

// for each element in guess iterate through the name 

function revealAt(guessed, name, result){
  for (i = 0; i < name.length; ++i){
    for (x = 0; x < guessed.length; ++x){
      if ((guessed[x] === name[i].toLowerCase()) || (name[i] === ' ')){
       result[i] = ' ' + name[i];
       console.log(result[i]);
      } else{
      }
    }
  }
}

function uniqueGuess(guess, guessed){
  if (guessed.indexOf(guess) === -1){
    return guess;
  }
}

// function insertGuess(event){
//   event.preventDefault();
//   guesses.push(document.getElementById('userGuess').value);
//   alert(guesses);
// }

function insertToDoc (arr, id){
  var text = ''
  for (i = 0; i > arr.length; ++i){
    text += arr[i];
  }
  document.getElementById(id).innerText += text; 
}


function keyVal(arr, key){
  if (arr.indexOf(key) === -1){
    
  } else{
      return key;
  }
}

function winCondition(){

}

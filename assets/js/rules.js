// fills in the blanks
function blanks(result, name) {
  for(i = 0; i < name; ++i) {
    result.push('_' + ' ');
    }   
    return result
  }

function chooseName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }  

// for each element in guess iterate through the name 

function revealAt(guess, name, result){
  for (i = 0; i < name.length; ++i){
    for (x = 0; x < guess.length; ++x){
      if (guess[x] === name[i]){
       result[i] = ' ' + guess[x];
      }
    }
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


function insertGuess(){
  document.getElementById("submitGuess").addEventListener("click", function(){
    guesses.push(document.getElementById('userGuess').value);
});
}
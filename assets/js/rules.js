// fills in the blanks
function blanks(name) {
  var msg = '';
  for (i in name) {
    msg = '_ ' + msg;
  }
  return msg;
}

function chooseName(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }  

// for each element in guess iterate through the name 

function revealAt(guess, name, result){
  for (i = 0; i < name.length; ++i){
    for (x = 1; x < guess.length; ++x){
      if (guess[x] === name[i]){
        result[x] = guess[x];
        console.log(guess[x]);
      }
    }
  }
}

// function guessResults(name, guess) {
//   for (i = 0; i < name.length; ++i){
//     for( name.indexOf())
//   }
// }


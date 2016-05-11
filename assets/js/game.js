window.onload = function () {

  var nameBank =['Billie Holiday', 'Ella Firtzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman'];

  var selectName = chooseName(nameBank);

  var artistName = document.getElementById("artistName");



  var guessLeft =  9;

  document.getElementById("guessLeft").innerText = guessLeft;

  artistName.textContent = blanks(selectName);

}


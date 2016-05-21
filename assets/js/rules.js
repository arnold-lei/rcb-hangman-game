
  //Generate the legal moves (anythin in the alphabet)
  var alphabet = chars('a', 'z');

  // Word back of names 
  var nameBank =['Billie Holiday', 'Ella Fitzgerald', 'Artie Shaw','Duke Ellington', 'Benny Goodman', 'Gene Krupa', 'Jimmie Lunceford', 'Count Basie'];

  var artistInfo = {
    'Billie Holiday': 'Eleanora Fagan (April 7, 1915 - July 17, 1959), professionally known as Billie Holiday, was an American jazz musician and singer-songwriter with a career spanning nearly thirty years. Nicknamed "Lady Day" by her friend and music partner Lester Young, Holiday had a seminal influence on jazz music and pop singing. Her vocal style, strongly inspired by jazz instrumentalists, pioneered a new way of manipulating phrasing and tempo. Holiday was known for her vocal delivery and improvisational skills, which made up for her limited range and lack of formal music education. While there were other jazz singers with equal talent, Billie Holiday had a voice that captured the attention of her audience.',
    'Ella Fitzgerald': 'Ella Jane Fitzgerald (April 25, 1917 -June 15, 1996) was an American jazz singer often referred to as the First Lady of Song, Queen of Jazz and Lady Ella. She was noted for her purity of tone, impeccable diction, phrasing and intonation, and a "horn-like" improvisational ability, particularly in her scat singing.',
    'Artie Shaw': 'Artie Shaw (born Arthur Jacob Arshawsky; May 23, 1910 - December 30, 2004) was an American clarinetist, composer, bandleader, and actor. Also an author, Shaw wrote both fiction and non-fiction. <br/> Widely regarded as "one of jazz\'s finest clarinetists," Shaw led one of the United States\' most popular big bands in the late 1930s through the early 1940s. Though he had numerous hit records, he was perhaps best known for his 1938 recording of Cole Porter\'s "Begin the Beguine." Prior to the release of "Beguine," Shaw and his fledgling band had languished in relative obscurity for over two years and, after its release, he became a major pop artist within short order. The record eventually became one of the era\'s defining recordings. Musically restless, Shaw was also an early proponent of what became known much later as Third Stream music, which blended elements of classical and jazz forms and traditions. His music influenced other musicians, such as John Barry in England, with the vamp of the James Bond Theme, possibly influenced by "Nightmare," which also has a similar vamp to Kurt Weill\'s "Lonely House."[2]',
    'Duke Ellington': 'Edward Kennedy "Duke" Ellington (April 29, 1899 - May 24, 1974) was an American composer, pianist, and bandleader of a jazz orchestra, which he led from 1923 until his death in a career spanning over fifty years. <br/> Born in Washington, D.C., Ellington was based in New York City from the mid-1920s onward, and gained a national profile through his orchestra\'s appearances at the Cotton Club in Harlem. In the 1930s, his orchestra toured in Europe. Though widely considered to have been a pivotal figure in the history of jazz, Ellington embraced the phrase "beyond category" as a liberating principle, and referred to his music as part of the more general category of American Music, rather than to a musical genre such as jazz.',
    'Benny Goodman': 'Benjamin David "Benny" Goodman (May 30, 1909 - June 13, 1986) was an American jazz and swing musician, clarinetist and bandleader, known as the "King of Swing". <br/>In the mid-1930s, Benny Goodman led one of the most popular musical groups in America. His concert at Carnegie Hall in New York City on January 16, 1938, is described by critic Bruce Eder as "the single most important jazz or popular music concert in history: jazz\'s \'coming out\' party to the world of \'respectable\' music."',
    'Gene Krupa': 'Eugene Bertram "Gene" Krupa (January 15, 1909 - October 16, 1973) was an American jazz and big band drummer, band leader, actor, and composer. Known for his highly energetic, flamboyant style and for his showmanship, Krupa is considered one of the most influential drummers in jazz history and one of the first major percussive soloists.',
    'Jimmie Lunceford': 'James Melvin "Jimmie" Lunceford (June 6, 1902 - July 12, 1947) was an American jazz alto saxophonist and bandleader in the swing era. <br/> Lunceford was born on a farm in the Evergreen community, west of the Tombigbee River, near Fulton, Mississippi. The 53 acre farm was owned by his father, James. His mother was Idella ("Ida") Shumpert of Oklahoma City, an organist of "more than average ability." Seven months after James Melvin was born, the family moved to Oklahoma City.[2][3] The family next moved to Denver where Lunceford went to high school and studied music under Wilberforce J. Whiteman, father of Paul Whiteman, whose band was soon to acquire a national reputation. As a child in Denver, he learned several instruments. After high school, Lunceford continued his studies at Fisk University.[4] In 1922, he played alto saxophone in a local band led by the violinist George Morrison which included Andy Kirk, another musician destined for fame as a bandleader.',
    'Count Basie': 'William James "Count" Basie (August 21, 1904 - April 26, 1984) was an American jazz pianist, organist, bandleader, and composer. His mother taught him to play the piano and he started performing in his teens. Dropping out of school, he learned to operate lights for vaudeville and to improvise accompaniment for silent films at a local movie theater in his home town of Red Bank, New Jersey. By 16 years old, he increasingly played jazz piano at parties, resorts and other venues. In 1924, he went to Harlem, where his performing career expanded; he toured with groups to the major jazz cities of Chicago, St. Louis and Kansas City. In 1929 he joined Bennie Moten\'s band in Kansas City, and played with them until Moten\'s death in 1935. <br/> <br/>In 1935, Basie formed his own jazz orchestra, the Count Basie Orchestra, and in 1936 took them to Chicago for a long engagement and their first recording. He led the group for almost 50 years, creating innovations like the use of two "split" tenor saxophones, emphasizing the rhythm section, riffing with a big band, using arrangers to broaden their sound, and others. Many musicians came to prominence under his direction, including the tenor saxophonists Lester Young and Herschel Evans, the guitarist Freddie Green, trumpeters Buck Clayton and Harry "Sweets" Edison and singers Jimmy Rushing and Joe Williams. Basie\'s theme songs were "One O\'Clock Jump", developed in 1935 in the early days of his band, and later "April in Paris".',
  }

  var artistPic = {
    'Billie Holiday':'billie_holiday.jpg',
    'Ella Fitzgerald':'ella_fitzgerald.jpg',
    'Artie Shaw':'artie_shaw.jpg',
    'Duke Ellington':'duke_ellington.jpg',
    'Benny Goodman':'benny_goodman.jpg',
    'Gene Krupa':'gene_krupa.jpg',
    'Jimmie Lunceford':'jimmie_lunceford.png',
    'Count Basie':'count_basie.jpg',
  }

  var artistSong = {
    'Billie Holiday':'https://embed.spotify.com/?uri=spotify%3Atrack%3A0HAFFIr6YI9qa8lECz2uay',
    'Ella Fitzgerald':'https://embed.spotify.com/?uri=spotify%3Atrack%3A5CMw1IWB7JOpUY9nk54n1K',
    'Artie Shaw':'https://embed.spotify.com/?uri=spotify%3Atrack%3A4ki9qlNmyGbCl0YaJy3XuK',
    'Duke Ellington':'https://embed.spotify.com/?uri=spotify%3Atrack%3A0MT3c0V4sYxLBYJWIgnwxa',
    'Benny Goodman':'https://embed.spotify.com/?uri=spotify%3Atrack%3A2gXKmlCm7KIY5I8naTkbdU',
    'Gene Krupa':'https://embed.spotify.com/?uri=spotify%3Atrack%3A7fK4RO6zPqy3fj7YroTlmB',
    'Jimmie Lunceford':'https://embed.spotify.com/?uri=spotify%3Atrack%3A5Z4KnYouohw4dFP4qUK3Do',
    'Count Basie':'https://embed.spotify.com/?uri=spotify%3Atrack%3A08A2Kb6BMw2lB1VwdcXaXx',
  }
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

  var gameState = 'cont';

  //Where we store the user guesses
  var guesses = [];

  //Where we store the correct guesses
  var results = [];

  var winCount = 0; 

  var userGuess;

  //setting up the artist name to be guessed in blank tiles
  var result = blanks(results, selectName);
  

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
      result.push('-')
    }else{
    result.push('_');
    } 
  }  
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
    }else if(arrName[i] == '-') {
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
  return arr.toString().replace(/\,/g,'').replace(/\-/g,' ');
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
    document.querySelector('.artistName').innerHTML = selectName;
    $('.end').attr('class','alert alert-success row');
    $('#music').attr('src',artistSong[selectName]);

    ++winCount;

    wins.innerHTML = winCount;
    document.querySelector('.msg').innerHTML ='Congratulations you\'ve won!<br/>';
    gameState = 'end';
  }else if (guess <= 0 ){
    show('success');
    document.querySelector('.artistName').innerHTML = selectName;
    $('.end').attr('class','alert alert-danger row');
    $('#music').attr('src',artistSong[selectName]);
    $('.btn').attr('class','btn btn-danger');
    document.querySelector('.msg').innerHTML='Sorry, you lost!<br/>';
    console.log('Sorry you lost');
    gameState = 'end';
  }
}

function reset(){
  gameState = 'cont';
  //Chooeses a random name form the word bank
  selectName = chooseName(nameBank);

  //Where we store the user guesses
  guesses = [];

  //Where we store the correct guesses
  results = [];

  //Number of guesses left
  guessLeft =  gameGuessCount;

  selectName = chooseName(nameBank);

  artistName = document.getElementById('artistName');

  //Chooeses a random name form the word bank
  selectName = chooseName(nameBank);

  artistName.textContent = results;

  var result = blanks(results, selectName);

  guessCount.innerText = guessLeft;

  guessLetter.innerText = guesses;

  document.querySelector('#success').style.display = 'none';

  //If the user guesses correctly it will reveal in the blank tiles where the letter was
  revealAt(userGuess, selectName, results, guessLeft);

  console.log('reset!');
}

function game(){
  //Event listener for user keypress
    document.onkeyup = function(event) {

      hide('welcomeMessage');

      show('gameboard');

      // stores user input in this variable, only accepts unique keys and valid keys
      userGuess = uniqueGuess(keyVal(alphabet, String.fromCharCode(event.keyCode).toLowerCase()), guesses);

      // pushes the user input to the guessess array 
      guessVal(userGuess, guesses);

      //If the user guesses correctly it will reveal in the blank tiles where the letter was
      revealAt(userGuess, selectName, results, guessLeft);

      artistName.textContent = results.toString().replace(/,/g, ' ');

      guessCount.innerText = guessLeft;

      guessLetter.innerText = guesses;

      showArtistInfo(selectName, artistInfo)

      showArtistPic(selectName, artistPic)

      winCondition(removeComma(results), selectName, guessLeft);

  }
}

function showArtistInfo(artist, artistInfo){
  $('.artistBio').html(artistInfo[artist]);
}

function showArtistPic(artist, artistPic){
  $('.artistPic').attr('src','assets/img/' + artistPic[artist]);
}

function quit(){

    reset();

    show('welcomeMessage');

    hide('gameboard');

    winCount = 0;

    wins.innerHTML = winCount;

  document.querySelector('.msg').innerHTML ='<h1>Thanks for playing! You won a total of ' + winCount + ' times <h1>';
  console.log('quite the game');  

}

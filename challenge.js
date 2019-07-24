//var score1=0;
//var score2=0;
var scores, roundScore,dice, activePlayer;
var gamePlaying;
var lastDice;
init();
/*scores = [0,0];
 roundScore = 0;
activePlayer = 0;
*/
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'  + activePlayer).innerHTML = '<em>' + dice +'</em>';

//to read elements from web page
//var x = document.querySelector('#score-1').textContent;
//console.log(x);
/*
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

*/
// to make the dice in web page invisible to display
//document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
 if(gamePlaying){
   // 1.random number should be fetched
   var dice1 = Math.floor(Math.random()*6)+1;
   var dice2= Math.floor(Math.random()*6)+1;
   //display the result
   //var diceDOM = document.querySelector('.dice');
   document.getElementById('dice-1').style.display = 'block';
   document.getElementById('dice-2').style.display = 'block';
   //diceDOM.style.display = 'block';

  document.getElementById('dice-1').src = 'dice' + dice1 + '.png';
  document.getElementById('dice-2').src = 'dice' + dice2 + '.png';
  if (dice1 !== 1 && dice2 !== 1)
  {
    //Add Score
    roundScore += (dice1 + dice2);
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
 
 } else{
    //Next Player
   nextPlayer();
 }

   /*if(dice === 6 && lastDice === 6){
       scores[activePlayer] = 0;
       document.querySelector('#score-' + activePlayer).textContent = '0';
       nextPlayer();

   }
else if (dice!==1){
   //Add Score
   roundScore += dice;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;

} else{
   //Next Player
  nextPlayer();
}
lastDice = dice;
*/
 }

});
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
//Add current Score to global score
scores[activePlayer] += roundScore;

//update the UI
document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];

var winningscore;
var input = document.querySelector('.final-score').value;
//console.log(input);\

//undefined , 0, null or "" are coerced to false
//anything elseis coerced to true
if(input){
     winningscore = input;
    
}
else{
    winningscore = 100;
}


// check if player won the game
if(scores[activePlayer] >= winningscore){
   document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';
   document.getElementById('dice-1').style.display = 'none';
   document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

   gamePlaying = false;

}
else{
//Next player
nextPlayer();

}
    }
    
});


function nextPlayer(){
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

   /* if(activePlayer === 0){
        activeplayer = 1;

    }
    else{
        activePlayer = 0;

    }*/
    //to make the roundscore as0
roundScore = 0;
//to display the roundscore as 0 when dice retuirns 1
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//to make the current player as active in background
/*document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.add('active');
*/
document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
//document.querySelector('.dice').style.display = 'none';
document.getElementById('dice-1').style.display = 'none';
   document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
scores = [0,0];
activePlayer = 0;
roundScore = 0;
gamePlaying= true;

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player1';
document.getElementById('name-1').textContent = 'player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

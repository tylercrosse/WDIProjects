var deck = []
var computerHand = []
var playerHand = []
var warHand = []
var StartButton = document.querySelector("#starter")
var PlayerCard = document.querySelector("#MyCard")
var EnemyCard = document.querySelector("#CompCard")

function makeDeck() {
	var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
	var cardNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
	for (var i=0; i < suits.length; i++) {
    for (var j=0; j < ranks.length; j++){
      var card = {}
      card.cardNum = cardNumber[j]
      card.rank    = ranks[j];
      card.suit    = suits[i];
      deck.push(card);
    }
  }
}

function shuffleDeck(){
  var currentIndex = deck.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }
}

function splitDeck() {
   var i, j
   for (i =0; i <= 25; i++) {
          playerHand.push(deck[i]);
      }
   for (j=26; j <=51; j++){
          computerHand.push(deck[j]);
   }
      }

StartButton.addEventListener("click", function() {
 var myCard = playerHand[0].cardNum
 var theirCard = computerHand[0].cardNum
 document.querySelector("#MyCard").innerHTML = playerHand[0].rank + " of " + playerHand[0].suit
 document.querySelector("#CompCard").innerHTML = computerHand[0].rank + " of " + computerHand[0].suit
 if (myCard < theirCard) {
   var shifted = playerHand.shift();
   computerHand.push(shifted);
   var shifted2 = computerHand.shift();
   computerHand.push(shifted2);
   console.log("You worthless piece of shit.")
 }
 else if (myCard > theirCard) {
    var shifted = computerHand.shift();
    playerHand.push(shifted);
    var shifted2 = playerHand.shift();
    playerHand.push(shifted2);
    console.log("You magnificent bastard!")
  }
  else {
    tieBreaker()
  }
});

function tieBreaker() {
    alert("War!")
    var cardA = playerHand[1].cardNum
    var cardB = computerHand[1].cardNum
    document.querySelector("#MyCard").innerHTML = playerHand[1].rank + " of " + playerHand[1].suit
    document.querySelector("#CompCard").innerHTML = computerHand[1].rank + " of " + computerHand[1].suit
    if (cardA < cardB) {
      var shifted = computerHand.shift();
      var shifted2 = playerHand.shift();
      computerHand.push(shifted)
      computerHand.push(shifted2)
      var shifted = computerHand.shift();
      var shifted2 = playerHand.shift();
      computerHand.push(shifted)
      playerHand.push(shifted2)
      console.log("You worthless piece of shit.")
    }
    else if (cardA > cardB) {
      var shifted = computerHand.shift();
      var shifted2 = playerHand.shift();
      playerHand.push(shifted);
      playerHand.push(shifted2);
      var shifted = computerHand.shift();
      var shifted2 = playerHand.shift();
      playerHand.push(shifted);
      playerHand.push(shifted2);
      console.log("You magnificent bastard!")

  };
}

makeDeck();
shuffleDeck(deck);
splitDeck(deck);

if (playerHand.length == 0)
  alert("You lose. Your defeat brings shame upon your family, and the Shaolin temple.")
if (computerHand.length ==0)
  alert("You are victorious. Complete your triumph, and destroy your computer.")

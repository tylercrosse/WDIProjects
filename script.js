var deck = []
var computerHand = []
var playerHand = []
// Be careful naming things with capital letters, typically variables with capitalized first letters are reserved for classes/constructors.
var StartButton = document.querySelector("#starter")
var ScoreButton = document.querySelector("#scorekeeper")
var PlayerCard = document.querySelector("#MyCard")
var EnemyCard = document.querySelector("#CompCard")


function makeDeck() {
	var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"],
      suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  for (var i=0; i < suits.length; i++) {
    for (var j=0; j < 13; j++){
      var card = { cardNum: j+1,
                      rank: ranks[j],
                      suit: suits[i]
      };
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
  playerHand = deck.slice(0,26);
  computerHand = deck.slice(26);
}

// This function + makeDeck() are an awesome solution to not having a hard coded deck. But don't be afraid of hard coded data. Ultimately that's what at a database is, and what we're going to be using more and more moving forward.
function setCardDisplay(id, card) {
  document.querySelector(id).innerHTML = card.rank + " of " + card.suit;
  document.querySelector(id).innerHTML = '<img class="card" src="CardFolder/' + card.rank + '_of_' + card.suit +  '.png" />'
}

StartButton.addEventListener("click", function() {
  duelCards(playerHand, computerHand);
});

//functions by moving all cardsInPlay into a new array. when a winner is determined,
//the contents of that array are pushed to the winner's array.
// :+1:
function duelCards(playerHand, computerHand) {
  var playerNum   = null,
      computerNum = null,
      winningHand = null,
      cardsInPlay = [];

  while (playerNum == computerNum && (playerHand.length > 0 && computerHand.length > 0) )  {
    // Everything in this while loop could be pulled out into a separate function.
    var playerCard    = playerHand.shift(),
        computerCard  = computerHand.shift();
        playerNum     = playerCard.cardNum;
        computerNum   = computerCard.cardNum;

    setCardDisplay("#MyCard",   playerCard);
    setCardDisplay("#CompCard", computerCard);

    if (playerNum < computerNum) {
      winningHand = computerHand;
      console.log("You worthless piece of feral dung.");
    }
    else if (playerNum > computerNum) {
      winningHand = playerHand;
      console.log("You magnificent bastard!");
    }
    else {
      console.log("hello");
      alert("War!");
      // According to wikipedia 'If the two cards played are of equal value, then there is a "war".[1] Both players place the next card of their pile face down, depending on the variant, and then another card face-up. The owner of the higher face-up card wins the war and adds all six (or ten) cards on the table to the bottom of their deck.'
      // As far as I can tell the winner here would only get four cards instead of six unless there is another war. Doing anything with war was a bonus and what you have here is great. I really like that you refactored it out of that crazy nested if conditional you had before.
    }
    cardsInPlay.push(playerCard, computerCard);
  }
  for(var i = 0; i < cardsInPlay.length; i++){
    winningHand.push(cardsInPlay[i]);
  }
}

ScoreButton.addEventListener("click", function() {
  alert("Your score stands at " + playerHand.length + ". While your opponent's score stands at " + computerHand.length + ".")
})


makeDeck();
shuffleDeck(deck);
splitDeck(deck);

// if you are commiting frequently you can ddlete commented out or old code because it will be backed up with git

// duelCards();

// function makeDeck() {
//   var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"],
//       cardNumber = [1,2,3,4,5,6,7,8,9,10,11,12,13],
//       suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
// 	for (var i=0; i < suits.length; i++) {
//     for (var j=0; j < ranks.length; j++){
//       var card = {}
//       card.cardNum = cardNumber[j]
//       card.rank    = ranks[j];
//       card.suit    = suits[i];
//       deck.push(card);
//     }
//   }
// }

  // StartButton.addEventListener("click", function() {
  //  var myCard = playerHand[0].cardNum
  //  var theirCard = computerHand[0].cardNum
  //  document.querySelector("#MyCard").innerHTML = playerHand[0].rank + " of " + playerHand[0].suit
  //  document.querySelector("#CompCard").innerHTML = computerHand[0].rank + " of " + computerHand[0].suit
  //  if (myCard < theirCard) {
  //    var shifted = playerHand.shift();
  //    computerHand.push(shifted);
  //    var shifted2 = computerHand.shift();
  //    computerHand.push(shifted2);
  //    console.log("You worthless piece of feral dung.")
  //  }
  //  else if (myCard > theirCard) {
  //     var shifted = computerHand.shift();
  //     playerHand.push(shifted);
  //     var shifted2 = playerHand.shift();
  //     playerHand.push(shifted2);
  //     console.log("You magnificent bastard!")
  //   }
  //   else {
  //     tieBreaker()
  //   }
  // });
  //
  // function tieBreaker() {
  //     alert("War!")
  //     var cardA = playerHand[1].cardNum
  //     var cardB = computerHand[1].cardNum
  //     document.querySelector("#MyCard").innerHTML = playerHand[1].rank + " of " + playerHand[1].suit
  //     document.querySelector("#CompCard").innerHTML = computerHand[1].rank + " of " + computerHand[1].suit
  //     if (cardA < cardB) {
  //       var shifted = computerHand.shift();
  //       var shifted2 = playerHand.shift();
  //       computerHand.push(shifted)
  //       computerHand.push(shifted2)
  //       var shifted = computerHand.shift();
  //       var shifted2 = playerHand.shift();
  //       computerHand.push(shifted)
  //       computerHand.push(shifted2)
  //       console.log("You worthless piece of shit.")
  //     }
  //     else if (cardA > cardB) {
  //       var shifted = computerHand.shift();
  //       var shifted2 = playerHand.shift();
  //       playerHand.push(shifted);
  //       playerHand.push(shifted2);
  //       var shifted = computerHand.shift();
  //       var shifted2 = playerHand.shift();
  //       playerHand.push(shifted);
  //       playerHand.push(shifted2);
  //       console.log("You magnificent bastard!")
  //
  //   };
  // }

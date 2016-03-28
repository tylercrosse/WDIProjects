///Create the Card object, assign it a numerical value and a suit

function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
  this.toString   = cardToString;
  this.createNode = cardCreateNode;
}

function cardToString() {
  var rank, suit;
  switch (this.rank) {
    case "A" :
      rank = "Ace";
      break;
    case "2" :
      rank = "Two";
      break;
    case "3" :
      rank = "Three";
      break;
    case "4" :
      rank = "Four";
      break;
    case "5" :
      rank = "Five";
      break;
    case "6" :
      rank = "Six";
      break;
    case "7" :
      rank = "Seven";
      break;
    case "8" :
      rank = "Eight";
      break;
    case "9" :
      rank = "Nine";
      break;
    case "10" :
      rank = "Ten";
      break;
    case "J" :
      rank = "Jack"
      break;
    case "Q" :
      rank = "Queen"
      break;
    case "K" :
      rank = "King"
      break;
    default :
      rank = null;
      break;
  }
  suit = {
    C: "Clubs",
    D:"Diamonds",
    H:"Hearts",
    S: "Spades"
  }[this.suit];

  if (rank == null || suit == null)
    return "";
    return rank + " of " + suit;
}

//create an empty array of cards, and functions for manipulating it

function Stack() {
this.cards     = new Array();
this.makeDeck  = stackMakeDeck;
this.shuffle   = stackShuffle;
this.deal      = stackDeal;
this.draw      = stackDraw;
this.addCard   = stackAddCard;
this.combine   = stackCombine;
this.cardCount = stackCardCount;
}

//make a cards array comprising a deck
function stackMakeDeck(num_decks) {
	var cards = []
	var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
	var suits = new Array("C", "D", "H", "S");
	var cur_deck, cur_suit, cur_rank;
	var deck_size = ranks.length * suits.length;
	  for (cur_deck = 0; cur_deck < num_decks; cur_deck++)
	    for (cur_suit = 0; cur_suit < suits.length; cur_suit++)
	      for (cur_rank = 0; cur_rank < ranks.length; cur_rank++)
	cards.push(new Card(ranks[cur_rank], suits[cur_suit]));
	return cards
}

//shuffle the cards//
function stackShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
 return array;
}

// # This exercise is about classifying poker hands.  If you aren't familiar, these are the possible poker hands from lowest
// # to highest value:
// #
// # High Card:       Nothing meaningful except individual card ranks
// # Pair:            Two cards with matching ranks
// # Two Pair:        Two pairs of cards with matching ranks
// # Three of a Kind: Three cards with matching ranks
// # Straight:        All 5 cards of consecutive rank
// # Flush:           All 5 cards of the same suit
// # Full House:      Three of a Kind and a Pair
// # Four of a Kind:  Four cards with matching ranks
// # Straight Flush:  Straight with all cards of the same suit
// # Royal Flush:     Straight flush ending in Ace
// #
// # We will represent cards with a two-character string where the first character represents the rank, and the second
// # character represents the suit:
// #
// # Ranks: 2 3 4 5 6 7 8 9 0 J Q K A
// # Suits: S C D H
// #
// # Examples:
// #
// # 0S - 10 of Spades
// # JC - Jack of Clubs
// # QD - Queen of Diamonds
// # AH - Ace of Hearts
// #
// # The exercise is to write a function that takes a list of 5 playing cards, and returns the type of poker hand that it
// # represents.  For instance in ruby we could define a method like so:
// #
// # def classify(hand)
// # ...
// # end
// #
// # Then calling it:
// #
// # => classify(['2S', '2C', '2D', '2H', '0D'])
// # -> "Four of a Kind"


// Player current hand
var userHand = ['10c', 'j-h', '03s', '08s', 'a-d'];

// write function to check if user has type of hand

// # Royal Flush: Straight flush ending in Ace
function royalFlush(cards) {

    let straightToA = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
    let sign = cards[0][1];
    let straightCount = 0;
    let flushCount = 0;

    for (let i = 0; i < cards.length; i++) {
        straightToA[8 + i] === cards[i][0] ? straightCount++ : flushCount;
        sign === cards[i][1] ? flushCount++ : flushCount;
    }

    // if user have all 5
    if (straightCount + flushCount === 10) {
        return 'You have Royal Flush';
    }
    // if user has Flush, call straightFlush to check if use have lower straight with Flush
    else if (flushCount === 5) {
        straightFlush(cards);
    }
    // if user has straight
    else if (straight === 5) {
        return "You have Straight to A's";
    }
    // check if user has lower straight
    else {
        evalCards(cards)
    }

}

// check for Fullhouse, 3 of a kind, 2 pair, 1 pair or only high card
// check if cards has duplicates
function evalCards() {

}

// # Straight Flush:  Straight with all cards of the same suit
function straightFlush(cards) {
    console.log('straightFlush')
}

function flush() {
    console.log('Flush')
}


function straight() {
    console.log('straight')
}

function pair() {

}

// function to determine what is the best hand and return type
function sortUserHand( hand ) {

    return numAndSign.sort((function(index){
        return function(a, b){
            return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
        };
    })(0));

}

function convertChar( hand ){
    var numAndSign = [];

    hand.forEach((card) => {
        if( card.slice(0,2) ) {

        }
        numAndSign.push([] );
    })

}


console.log(convertChar(userHand))
//Number of times hand has been drawn.
let NUM_TRIAL = 1;

//Each time poker hand is succesful.
let straightFlush = 0;
let fourOfAKind = 0; 
let fullHouse = 0; 
let flush = 0; 
let straight = 0; 
let threeOfAKind = 0;

//Probability of each poer hand
const suits = 'SHDC'
const numbers = '23456789JQKA'
function drawOneCard() {
    let suit = suits[Math.floor(Math.random() * suits.length)];
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    return suit + number;
}

function drawFiveCards() {
    let hand = [];
    for (let i = 0; i < 5; i++) {
        let card = drawOneCard();
        while (hand.includes(card)) {
            card = drawOneCard(); 
        }
        hand.push(card)
    }
    return hand;
}

function pokerHand() {
    for (let i = 0; i< NUM_TRIAL; i++){

    
        let hand = drawFiveCards();
        let draw = hand.join(' ');

        console.log(draw);

        function getStraightFlush() {
            if (draw.split(hand).length - 1 === 5) {
                return true;
            }
        }

        function getFourOfAKind() {
            if (draw.split(hand).length - 1 == 4) {
                return true;
            }
        }

        function getFlush() {
            if (draw.split(hand).length - 1 === 5) {
                return true;
            }
        }

        function getStraight() {
            if (draw.split(hand).length - 1 !== 5) {
                return true;
            }
        }

        function getThreeOfAKind() {
            if (draw.split(hand).length - 1 == 3) {
                return true;
            }
        }

        function getPair() {
            if (draw.split(hand).length - 1 == 2) {
                return true;
            }
        }
        if (getStraightFlush(draw)) {
            straightFlush += 1;
        } else if (getFourOfAKind(draw)) {
            fourOfAKind += 1;
        } else if (getThreeOfAKind(draw) && getPair(draw)){
            fullHouse += 1
        } else if (getFlush(draw)) {
            flush += 1; 
        } else if (getStraight(draw)) {
            straight += 1;
        } else if (getThreeOfAKind(draw)) {
            threeOfAKind += 1;
        }
    }  
    console.log(straightFlush/NUM_TRIAL + "% chance of getting a straight flush");
    console.log(fourOfAKind/NUM_TRIAL + "% chance of getting a four of a kind");
    console.log(fullHouse/NUM_TRIAL + "% chance of getting a full house");
    console.log(flush/NUM_TRIAL + "% chance of getting a flush");
    console.log(straight/NUM_TRIAL +"% chance of getting a straight");
    console.log(threeOfAKind/NUM_TRIAL + "% chance of getting a three of a kind");      
    }

pokerHand();
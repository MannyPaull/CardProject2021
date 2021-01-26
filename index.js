colours = ["red","black","yellow"];
numbers = [1,2,3,4,5,6,7,8,9,10];

var cards = {
  colour : [],
  number : []
};

function newValues(){
  cards.colour[i] = colours[Math.floor(Math.random() * colours.length)];
  cards.number[i] = numbers[Math.floor(Math.random() * numbers.length)];
};

function dupecheck(){
  for (j = 0; j < 30; j++){     //checks and reassigns any duplicate, duplex values in 'cards'
    if (j == 0){
      if (cards[j] == cards[j+1, 30]){
        cards.colour[j] = colours[Math.floor(Math.random() * colours.length)];
        cards.number[j] = numbers[Math.floor(Math.random() * numbers.length)];
        j = 0;
      }
    }
    if (j == 30){
      if (cards[j] == cards[0, j-1]){
        cards.colour[j] = colours[Math.floor(Math.random() * colours.length)];
        cards.number[j] = numbers[Math.floor(Math.random() * numbers.length)];
        j = 0;
      }
    }
    if (j == [1,30])
      if (cards[j] == cards[0, j-1] || cards[j+1, 30]){
      cards.colour[j] = colours[Math.floor(Math.random() * colours.length)];
        cards.number[j] = numbers[Math.floor(Math.random() * numbers.length)];
      j = 0;
    }
  };
};

for (i = 0; i < 30; i++){                             //assigns 30 duplex values to 'cards'
  newValues()
};

dupecheck();

console.log(cards);

function shuffle(array){
  for (let e = array.length - 1; e > 0; e--){
    let f = Math.floor(Math.random() * ( e + 1));    //function to shuffle Array
    let tempVal = array[e];
    array [e] = array[f];
    array [f] = tempVal;
  };
};

function shuffleDeck(){          //randomizes duplex values to a different order in the deck.

  deckValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  
  shuffle(deckValues);

  shuffledColours = [];
  shuffledNumbers = [];

  for (k = 0; k < 30 ; k++){
    let n = deckValues[k];
    shuffledColours[n] = cards.colour[k];
    shuffledNumbers[n] = cards.number[k];
  };

  console.log(cards.colour = shuffledColours);
  console.log(cards.number = shuffledNumbers);
};

shuffleDeck();
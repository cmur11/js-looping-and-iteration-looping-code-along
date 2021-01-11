// Code your solutions in this file
//  const gifts = ["teddy bear", "drone", "doll"]


//  function wrapGift(gift) {
//      console.log(`Wrapped${gift} and added a bow!`)
//  }


// for (let age = 30; age <40; age++){
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
// }


// const gifts = ["teddy bear", "drone", "doll"]

// function wrapGifts(gifts){
//     for (let i = 0; i <gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts;
// }
// wrapGifts(gifts);





let namesArray = ["Ada","Brendan", "Ali"]
let event = "birthday"

function writeCards(namesArray, event) {
    let thankYouCards = []
    for (let i = 0; i <namesArray.length; i++) {
        thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards;
}

//  writeCards(namesArray,event);
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }


let startBtn = document.querySelector(".btnStart").addEventListener("click", function(){
// value cards
const cards = [
    "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "J", "Q", "K", "A",
    "J", "Q", "K", "A",
    "J", "Q", "K", "A",
    "J", "Q", "K", "A"
];
const deck = new Array();

// J, Q & K = 10 -- A = 11 or 1
function createDeck(){
    deck= new Array();

    for (let i = 0 ; i < cards.length; i++)
    {
        let cardValue = parseInt(cards[i]);
        if (cards[i] == "J" || cards[i] == "Q" || cards[i] == "K")
        cardValue = 10;

        if (cards[i] == "A")
        cardValue = 11;
    }
}

// draw a random card for user and house



function drawRandomCard(cards){
    let randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
};
console.log(drawRandomCard(cards));

// start game

function playCards(){
    let drawYou = drawRandomCard(cards);
    let drawHouse = drawRandomCard(cards);
}


// Hit me
document.querySelector(".hit").addEventListener("click", function(){
    drawYou.push(drawRandomCard(cards));

});

document.querySelector(".stop").addEventListener("click", function(){
    

});

// Stop and calculate winner
function stop(){
    
}
console.log("stop");

// score card

function incrementScore(score) {
    score.innerText = parseInt(score.innerText) + 1

};


// when you click stop play again button appears

});
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1)

function who_won(randomNumber1, randomNumber2) {
    var winner = "Player"

    if (randomNumber1 > randomNumber2) {
        winner = "Player 1 Wins!";
    }

    if (randomNumber1 < randomNumber2) {
        winner = "Player 2 Wins!";
    }

    if (randomNumber1 === randomNumber2){
        winner = "Draw!";
    }

    return winner;

}

var display_winner = who_won(randomNumber1, randomNumber2)

var dice_1 = document.querySelector(".img1");
var dice_2 = document.querySelector(".img2");

dice_1.setAttribute("src", "images/dice"+randomNumber1+".png");
dice_2.setAttribute("src", "images/dice"+randomNumber2+".png");

document.querySelector("h1").textContent = display_winner;





const randomNumber1 = Math.ceil(Math.random() * 6);
const randomNumber2 = Math.ceil(Math.random() * 6);

const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const message = document.querySelector("h1");

const randomDice1 = "images/dice" + randomNumber1 + ".png";
const randomDice2 = "images/dice" + randomNumber2 + ".png";

// Rolling the dice
dice1.setAttribute("src", randomDice1);
dice2.setAttribute("src", randomDice2);

//Checking who wins
if (randomNumber1 < randomNumber2) {
    message.textContent = "Player 2 Wins!🚩";
} else if (randomNumber1 > randomNumber2) {
    message.textContent = "🚩Player 1 Wins!";
} else {
    message.textContent = "Draw!";
}
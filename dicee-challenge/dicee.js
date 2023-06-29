let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const message = document.querySelector("h1");

//Rolling the first dice
if (randomNumber1 === 1) {
    dice1.setAttribute("src", "images/dice1.png")
} else if (randomNumber1 === 2) {
    dice1.setAttribute("src", "images/dice2.png")
} else if (randomNumber1 === 3) {
    dice1.setAttribute("src", "images/dice3.png")
} else if (randomNumber1 === 4) {
    dice1.setAttribute("src", "images/dice4.png")
} else if (randomNumber1 === 5) {
    dice1.setAttribute("src", "images/dice5.png")
} else if (randomNumber1 === 6) {
    dice1.setAttribute("src", "images/dice6.png")
}

//Rolling the second dice
if (randomNumber2 === 1) {
    dice2.setAttribute("src", "images/dice1.png")
} else if (randomNumber2 === 2) {
    dice2.setAttribute("src", "images/dice2.png")
} else if (randomNumber2 === 3) {
    dice2.setAttribute("src", "images/dice3.png")
} else if (randomNumber2 === 4) {
    dice2.setAttribute("src", "images/dice4.png")
} else if (randomNumber2 === 5) {
    dice2.setAttribute("src", "images/dice5.png")
} else if (randomNumber2 === 6) {
    dice2.setAttribute("src", "images/dice6.png")
}

//Checking who wins
if (randomNumber1 < randomNumber2) {
    message.textContent = "Player 2 Wins!🚩";
} else if (randomNumber1 > randomNumber2) {
    message.textContent = "🚩Player 1 Wins!";
} else {
    message.textContent = "Draw!";
}
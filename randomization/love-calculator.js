//prompt("What is your name?");
//prompt("What is the name of your crush?");

let loveScore = Math.random();
//Generates a number between 0 and 0.999999999999999 
loveScore *= 100;
//Scales this number to be between 0 and 99.999999999999999
loveScore = Math.floor(loveScore) + 1;
//Rounds it down and adds 1 to make the range be 1-100 (without adding 1 it would have been 0 to 99)

alert("Your love score is " + loveScore + " %!");

let n = document.getElementsByTagName
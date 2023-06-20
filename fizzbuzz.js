// Code to push sequential numbers into an array

let output1 = [];
let count = 1;

function numberArray() {
    output1.push(count);
    count++;

    console.log(output1);
}

// Code to push items into an array according to the FizzBuzz game
let output2 = [];
let nextNumber = 1;

function fizzbuzz() {
    if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
        output2.push("FizzBuzz");
    } else if (nextNumber % 5 === 0) {
        output2.push("Buzz");
    } else if (nextNumber % 3 === 0) {
        output2.push("Fizz");
    } else {
        output2.push(nextNumber);
    }

    nextNumber += 1;

    console.log(output2);
}

//The sequence of conditional arguments is important, as the maching reads the code top to bottom and once a condition is met, it stops checking other conditions
// The function should be called in the console to see the progression of the array

//To make the function automatically create an array with a certain number of items use a while loop

let output3 = [];
nextNumber = 1;

function fizzbuzzLoop() {
    while (nextNumber <= 100) {
        if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
            output3.push("FizzBuzz");
        } else if (nextNumber % 5 === 0) {
            output3.push("Buzz");
        } else if (nextNumber % 3 === 0) {
            output3.push("Fizz");
        } else {
            output3.push(nextNumber);
        }

        nextNumber++;
    }

    console.log(output3);
}

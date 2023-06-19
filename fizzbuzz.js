// Code to push sequential numbers into an array

let output1 = [];
let count = 1;

function nuberArray() {
    output1.push(count);
    count++;

    console.log(output1);
}

// Code to push items into an array according to the FizzBuzz game
let output2 = [];
let nextNumber = 1;

//The sequence of conditional arguments is important, as the maching reads the code top to bottom and once a condition is met, it stops checking other conditions
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

// The function should be called in the console to see the progression of the array
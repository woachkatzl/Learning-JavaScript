// Fibonacci sequence is a sequence of numbers where each following number is the sum of the two preceding numbers.

function fibonacciGenerator(n) {
    let output = [];

    //Created a logic tree, where if n is 1 or 2, we have a predetermined outcome with the first two values of the array. Other n values would start a loop of pushing a required number of numbers into the array.

    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 2; i < n; i++) {
            output.push(output[i - 1] + output[i - 2]);
        }
        //i starts at 2, because we already have two values in the array. The loop stops when i < n because the count starts at 0.
        //I used i in the calculations, not sure if it's bad practice. The course solution used output.length where I use i, which may be a better idea.
    }

    return output;
}

let output = fibonacciGenerator(8);
console.log(output);
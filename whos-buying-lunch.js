//You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

// The parameters must be an array of names

function whosPaying(names) {
    // 1. Determine the number of names in the array
    let number = names.length;

    // 2. get a random number between 0 and the number of names - 1. "-1" because the sequential count starts at 0
    let chosenNumber = Math.floor((Math.random() * number));

    // 3. Pick a name from the array based on the random number
    let chosenPerson = names[chosenNumber];

    return chosenPerson + " is going to buy lunch today!"
}

//Example
result = whosPaying(["Yulia", "Polina", "Danton", "Kira"]);
console.log(result);
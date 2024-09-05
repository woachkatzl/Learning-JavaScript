//1.
//Given a string of space separated numbers, return a string with the highest and lowest number separated by a space. Highest number should be first. E.g. "1 2 3 4 5" ==> "5 1"

//My solution (first)
function highAndLow(numbers) {
    const numbersArr = numbers.split(" ");
    return `${Math.max(...numbersArr)} ${Math.min(...numbersArr)}`;
}

//My solution (another) - learning to use .reduce()
function highAndLow(numbers) {
    return numbers.split(" ")
        .reduce((acc, v, _, arr) => {
            if (v == Math.max(...arr) || v == Math.min(...arr)) //Using loose equality == coerces v into a number for comparison. Can also do `+v === Math.max(...arr)` for more explicit syntax
                acc.push(v)
            return acc;
        }, [])
        .sort((a, b) => b - a) //To make sure the highest number is first
        .join(" ");
}

//2.
//You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions. E.g. [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//My solution
function sortArray(array) {
    //create an array of odd numbers and sort it in ascending order 
    const resultArr = array.filter(n => n % 2).sort((a, b) => a - b);

    //create an array with pairs of even numbers positions, e.g. [[2, 0], [4, 1], [6, 2]]
    const evenPositions = array.reduce((acc, v, i) => {
        if (v % 2 === 0) acc.push([v, i]);
        return acc;
    }, []);

    //insert the even nubers into the sorted odd array based on their original positions using splice
    for (let pair of evenPositions) {
        resultArr.splice(pair[1], 0, Number(pair[0]));
    }

    return resultArr;
}

//Clever solution
//This solution is clearer and more consise. It is also better because using .splice() inside a loop makes code less efficient
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}
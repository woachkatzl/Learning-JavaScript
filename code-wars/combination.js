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
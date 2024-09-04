//1.
//Write a function that would create an arrays of numbers in reverse order, starting with a provided number

const reverseSeq = n => {
    return Array.from({ length: n }, (_, i) => n - i);
};
//Using Array.from() where the array-like is a new object with as many undefined elements as the provided number. The mapping function ignores the value of elements and uses their indexes to create a reverse sequence.

//OR
const reverseSeq2 = length => Array.from({ length }, () => length--)
//If the variable for the provided number is named as a shorthand property, the syntax can be significantly simplified


//2.
//Given the triangle of consecutive odd numbers:
//             1
//          3     5
//       7     9    11
//    13    15    17    19
// 21    23    25    27    29
//Calculate the sum of the numbers in the given row of this triangle (starting at index 1) e.g.: (Input --> Output):
// 1 -->  1
// 2 --> 3 + 5 = 8
// 3 --> 7 + 9 + 11 = 27

//My solution
function rowSumOddNumbers(n) {
    const arrayLength = n * (n + 1) / 2; //get the total number of odd numbers that would populate the triangle. We are given the number of triangle rows, each row contains as many numbers as the row number. So the length is the sum of all integers up to n.

    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step); //create a range function to create an array of odd numbers

    const oddArr = range(1, arrayLength * 2, 2); //create an an array of odd numbers that would make up a tringe with the given number of rows

    return oddArr.splice(-n, n).reduce((acc, val) => acc + val, 0); //extract the last "row" of the triangle with .splice and get the sum of its numbers
}

//Turns out the sum of numbers in any given row is that row number in cube n ** 3 -_-
function rowSumOddNumbers1(n) {
    return n ** 3;
}

//3.
//Given an array of numbers return a new array where the first smallest number is removed. Do not mutate the original array.

//Clever solution
function removeSmallest(numbers) {
    const smallestRate = Math.min(...numbers);
    const indexToDelete = numbers.indexOf(smallestRate);

    return [...numbers.slice(0, indexToDelete), ...numbers.slice(indexToDelete + 1)];
}
//Write a function that would create an arrays of numbers in reverse order, starting with a provided number

const reverseSeq = n => {
    return Array.from({length: n}, (_, i) => n - i);
};
//Using Array.from() where the array-like is a new object with as many undefined elements as the provided number. The mapping function ignores the value of elements and uses their indexes to create a reverse sequence.


//OR
const reverseSeq2 = length => Array.from({length}, () => length--)
//If the variable for the provided number is named as a shorthand property, the syntax can be significantly simplified
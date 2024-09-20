//1.
//Square every digit of a given number and concatenate them. E.g. 9119 will return 811181, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num) {
    return +num.toString().split('').map(d => d * d).join('');
}

//2.
//Write a function that checks whether one array has all the "same" elements but squared. The function should work regardless of elements order and have the same number of occurances of each element. If either argument is null return false.
//E.g. a = [121, 144, 19, 161, 19, 144, 19, 11]  
//b = [121, 14641, 20736, 361, 25921, 361, 20736, 361] is same as [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

//My solution
function comp(array1, array2) {
    if (!array1 || !array2)
        return false;
    if (array1.length !== array2.length)
        return false;
    for (let el of array1) {
        const ind = array2.findIndex(num => num === el * el); //Check for array1 element in array2 and find its index
        if (ind !== -1) array2.splice(ind, 1); //extract the found element from array2
    }
    return array2.length ? false : true; //If by the end of the loop array2 is empty, the check is thruthy
}

//Clever solution
function comp1(array1, array2) {
    if (array1 == null || array2 == null) return false;
    if (array1.length !== array2.length)
        array1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

//3.
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//My solution
function count(string) {
    return string.split("").reduce((acc, v) => {
        !acc[v] ? acc[v] = 1 : acc[v]++;
        return acc;
    }, {});
}

//Another solution
function count1(string) {
    var count = {};
    string.split('').forEach(function (s) {
        count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
}
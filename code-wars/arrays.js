//1.
//Square every digit of a given number and concatenate them. E.g. 9119 will return 811181, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num) {
    return +num.toString().split('').map(d => d * d).join('');
}
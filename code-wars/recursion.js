//1.
//Given numbers a and b return the sum of all the numbers between them including themselves

//My solution
function getSum(a, b) {
    let sum = 0;
    for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    return sum;
}

//Clever solution
function GetSum1(a, b) {
    if (a == b) return a;
    else if (a < b) return a + GetSum1(a + 1, b);
    else return a + GetSum1(a - 1, b);
}
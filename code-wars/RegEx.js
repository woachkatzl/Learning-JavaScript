//1. Write a method to bring the first letter of every word in a string to upper case
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function (x) { return x.toUpperCase(); });
};

// /(^|\s)[a-z]/g - This expression matches any lowercase letter that either is at the start of the string (^) or follows a whitespace character (\s).

//2.
//Write a function to convert a name into initials, provided the input is always a string of two words.

function abbrevName(name) {
    return name.match(/\b[a-z]/gi).map(char => char.toUpperCase()).join(".");
}

// /\b[a-z]/gi - this expression matches any letter following a non-word character (like a space or the start/end of a string).

//3.
//Write a function that will return a string showing the number of characters not within a-m range are in the given string compared to the titaol number of characters in the string
//exapmles: s="aaabbbbhaijjjm" ; printer_error(s) => "0/14"
//          s="aaaxbbbbyyhwawiwjjjwwm" ; printer_error(s) => "8/22"

function printerError(s) {
    return `${s.length - s.match(/[a-m]/gi).length}/${s.length}`;
    //return `${s.match(/[n-z]/gi).length}/${s.length}`;
}
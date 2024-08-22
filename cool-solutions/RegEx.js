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
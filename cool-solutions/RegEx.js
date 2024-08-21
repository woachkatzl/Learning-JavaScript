//1. Write a method to bring the first letter of every word in a string to upper case
String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function (x) { return x.toUpperCase(); });
};

// /(^|\s)[a-z]/g - This expression matches any lowercase letter that either is at the start of the string (^) or follows a whitespace character (\s).
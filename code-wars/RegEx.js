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

//4.
//Given an array return the total number of smiling faces.
//Rules for a smiling face:
//1) Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//2) A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//3) Every smiling face must have a smiling mouth that should be marked with either ) or D
//e.g. countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;

function countSmileys(arr) {
    const smilyesArr = arr.filter(el => /^[:;][~-]?[)D]$/.test(el))
    return smilyesArr.length;
}

//5.
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//"abcde" -> 0 # no characters repeats more than once
//"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//"indivisibility" -> 1 # 'i' occurs six times
//"aA11" -> 2 # 'a' and '1'

//My solution
function duplicateCount(text) {
    const countObj = text.toLowerCase().split("").reduce((acc, v) => {
        if (!acc[v]) { acc[v] = 1; }
        else { acc[v]++; }
        return acc;
    }, {}); //return an object with count of each symbol
    let count = 0;
    for (let key in countObj) {
        if (countObj[key] > 1) count++; //if any symbol count is more than 1, increase the output
    }
    return count;
}

//Clever solution
function duplicateCount1(text) {
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
    //match(/([^])\1+/g) will match any occurance of two or more same consecutive characters like "aa", "bbbb", "555". ([^]) is a capture group that matches any single character. \1 is a backreference to the captured group checking if a character is repeated. + is a quantifier that matches characters reapeated more than once. Without "+" only matches of two cosecutive characters would return like "aa" and "55" not "bbb"
}
//1
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);
}

//refactored
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 ? 1 : 2);
}
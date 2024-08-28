//1
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    return s.length % 2 === 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);
}

//refactored
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 ? 1 : 2);
}

//2
//Return a complimentary side of a DNA, where A and T compliment each other, and G and C. Example: "ATTGC" --> "TAACG"

//My solution:
function DNAStrand(dna) {
    const dnaRules = { "A": "T", "T": "A", "C": "G", "G": "C" };
    return dna.split("").map(letter => dnaRules[letter]).join("");
}

//Clever solution (is not ideal for long strings, performance would be slower)
function DNAStrand1(dna) {
    const dnaRules = { "A": "T", "T": "A", "C": "G", "G": "C" };
    return dna.replace(/./g, letter => dnaRules[letter]);
}

//3
//Turn a DNA string into an RNA string where T becomes U

//My solution:
function DNAtoRNA(dna) {
    return dna.replace(/t/gi, 'U');
}

//Clever solution:
function DNAtoRNA1(dna) {
    return dna.split("T"), join("U");
}
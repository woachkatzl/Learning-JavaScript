// A function to determine whether a year is a leap year or not. 

// Conditions:
// A year is a leap year if it is evenly divisible by 4 ;
// except if that year is also evenly divisible by 100;
// unless that year is also evenly divisible by 400.

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year."
            } else {
                return "Not leap year."
            }
        } else {
            return "Leap year."
        }
    } else {
        return "Not leap year."
    }
}
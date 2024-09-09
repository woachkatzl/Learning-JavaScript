//1.
//Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//[]                                -->  "no one likes this"
//["Peter"]                         -->  "Peter likes this"
//["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//My solution:
function likes(names) {
    switch (true) {
        case (names.length === 0):
            return "no one likes this";
            break;
        case (names.length === 1):
            return `${names[0]} likes this`;
            break;
        case (names.length === 2):
            return `${names[0]} and ${names[1]} like this`;
            break;
        case (names.length === 3):
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        case (names.length >= 4):
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
            break;
        default:
            return "Somthing went wrong";
    }
}

//Better solution:
//Here the use of "default" is made instead of the range of >=4
function likes2(names) {
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}

//Clever solution:
//The object maps out potential outcomes. In square brackets a number from 0 to 4 is determined through the Math.min() method. Square brackets notation gives access to a requred object property.
function likes3(names) {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)]
}
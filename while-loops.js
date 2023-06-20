// 99 bottles of beer song

let numberOfBottles = 99;

function beer() {
    //repeat the verse with necreasing number of bottles until one is left
    while (numberOfBottles > 1) {
        console.log(numberOfBottles + " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. \nTake one down and pass it around, " + numberOfBottles + " bottles of beer on the wall.");
        numberOfBottles--;
    }

    //add the remaining lyrics of the song
    console.log(numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.")
}
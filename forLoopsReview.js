// # Review 4 - For loops

// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//================

// 2. Make a loop that prints the numbers from 10 to 20.
for (let i = 10; i <= 20; i++) {
    console.log(i);
}
//=================================
// 3. Make a loop that prints the numbers from -10 to 10.
for (let i = -10; i <= 10; i++) {
    console.log(i);
}
//===================================
// 4. Make a loop that prints the numbers from 10 to -10.
for (let i = -10; i <= 10; i++) {
    console.log(-i);
}

// 5. Make a string. Then, make a loop that prints all the individual characters of that string.
const childhoodWord = "Shokolokobangoshay";
for (let i = 0; i < childhoodWord.length; i++) {
    console.log(childhoodWord.charAt(i));
}
//=============
// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.
const fiveItems = ["Egusi", "Jamajama", "Ndole", "Bekang", "nchi"];
for (let i = 0; i < fiveItems.length; i++) {
    let item = fiveItems[i];
    console.log(item);
}
//=================
// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.
const sixItems = ["Spinach", "Carrots", "Leeks", "Asparagus", "Pumpkin", "Cucumber"];
for (let i = 0; i < sixItems.length; i++) {
    let item = sixItems[i + 1];
    if (i % 2 === 0) {
        console.log(item);
    }
}
//========
// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.
const sixItemsOdd = ["Spinach", "Carrots", "Leeks", "Asparagus", "Pumpkin", "Cucumber", "Cabbage", "oranges", "Watermelon"];
for (let i = 0; i <= sixItemsOdd.length; i++) {
    let item = sixItemsOdd[i + 1];
    if (i % 3 === 1) {
        console.log(item)
    }
}

//====================================
// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.
const tenItemsArr = ["sheep", "goats", "cows", "cats", "dogs", "tigers", "wolves", "leopards", "gazelles", "antelopes"];
for (let i = 0; i < tenItemsArr.length; i++) {
    let item = tenItemsArr[i + 1];
    if (i % 2 === 0) {
        console.log(item)
    }

}
//=====
// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const numberedBulls = [
    { counter: "FF01" },
    { counter: "ZZ02 " },
    { counter: "K03 " },
    { counter: "OP04" },
    { counter: "P05" },
    { counter: "M06" },
    { counter: "HH007" },

];

for (let i = 0; i < numberedBulls.length; i++) {
    const values = numberedBulls[i]
    console.log(values.counter)



}
// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

let wholeNum = 35
for (let i = 0; i < 100; i++) {
    const targetedNum = wholeNum
    console.log(i)
    if (i === targetedNum) {

        break


    }

}

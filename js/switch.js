"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single random
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}


switch (color) {
    case "red":
        console.log('Apples are red');
        break;
    case "orange":
        console.log('Orange is a fruit');
        break;
    case "yellow":
        console.log('Bananas are yellow');
        break;
    case "green":
        console.log('Grass is green');
        break;
    case "blue":
        console.log('Sky is blue');
        break;
    default:
        console.log(color + ' I do not know anything by that color');

}


var cameronTotal = 180;
var ryanTotal = 250;
var georgeTotal = 320;


var minSale = 200;
var discountCameron;
var discountRyan;
var discountGeorge;

if (cameronTotal > minSale) {
    discountCameron = .9 * cameronTotal;

} else {
    discountCameron = cameronTotal;

}

if (ryanTotal > minSale) {
    discountRyan = .9 * ryanTotal;

} else {
    discountRyan = ryanTotal;

}

if (georgeTotal > minSale) {
    discountGeorge = .9 * georgeTotal;

} else {
    discountGeorge = georgeTotal;

}

console.log("The total for Cameron is $" + cameronTotal + ", after discount it is $" + discountCameron);

console.log("The total for Ryan is $" + ryanTotal + ", after discount it is $" + discountRyan);

console.log("The total for George is $" + georgeTotal + ", after discount it is $" + discountGeorge);


var flipACoin = Math.floor(Math.random()* 2)

var message;
if (flipACoin === 0) { // then
    message = "Buy a car";
} else { // otherwise
    message = "Buy a house";
}


var message2;
message2 = flipACoin === 0 ? "Buy a car" : "Buy a house";


// output
console.log(message);
console.log(message2);



var receipt = 60;
var luckyNumber = Math.floor(Math.random()* 6);

var total;
switch (luckyNumber) {
    case 0:
        total = receipt;
        break;
    case 1:
        total = .9 * receipt;
        break;
    case 2:
        total = .75 * receipt;
        break;
    case 3:
        total = .7 * receipt;
        break;
    case 4:
        total = .5 * receipt;
        break;
    case 5:
        total = 0;
        break;

}

// output
console.log("Your total to pay is " + total);

var maybe = confirm("Do you want to enter a number?");

if (maybe === true) {
    var probablyANumber = prompt("Enter a number");
    if (isNaN(probablyANumber)) {
        alert("That was not a number");
    } else {
        if (probablyANumber % 2 === 0) { // it's even
            alert("Your number is even")
        } else {
            alert("Your number is odd");
        }
        alert(Number(probablyANumber) + 100);
        if (probablyANumber > 0) {
            alert("Your number is positive:)");
        } else {
            alert("Your number is negative:|");
        }
    }
}
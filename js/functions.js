"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */
var name = "Paul"; // Global

function sayHello(name) { // Local
    var greet = "Hello";
    name = "Valdez";
    return greet + ", " + name + "!";

}

console.log(sayHello(name));
console.log(name);

// block -> function body -> process
// functionName( type parameters...) : returnType
// sayHello(string name): string



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 * Now store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

var helloMessage = sayHello("Paul");

function sayHello() {
    console.log(helloMessage);

}

    sayHello();




/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
var number = 13;
var message;
function isOdd(random) {
    message = (random % 2 === 1) ? random + " Is an odd number." : random + " Is not an odd number.";
    
}

    isOdd(random);
    console.log(message);


/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */


function calculateTip(percentage, total) {
    var tip = (percentage / 100) * total;
    return tip;


}

console.log(calculateTip(18, 100));


/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

function askForCheck() {
    var total = prompt("Give me the total");
    var percentage = prompt("Givem e the tip %");
    var tip = calculateTip(percentage, total);
    console.log("Your tip is: " + tip);
    
}


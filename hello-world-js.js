'use strict';

/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 1;

while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    // What do I need here?
}
    console.log(luckyNumber);

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100
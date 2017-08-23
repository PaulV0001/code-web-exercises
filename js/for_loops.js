"use strict";

var userQuestion = prompt("Choose a number between 1-10");

// for (var i = 1; i <= 10; i++) {
//     console.log(userQuestion + "x" + i + "=" + i * userQuestion);
//
//     }


    // for (var i = 1; i <= 10; i++) {
    //     var randomNumber = Math.floor(Math.random() * 180) + 20;
    //     console.log(randomNumber);
    //
    //     if (randomNumber % 2 == 0)
    //     {
    //         console.log(randomNumber + " is even");
    //     }
    //     else
    //     {
    //         console.log(randomNumber + " is odd");
    //     }
    //
    //
    //
    // }


    for (var i = 1; i <= 10; i++) {
        console.log((i % 10).toString().repeat(i));

        }

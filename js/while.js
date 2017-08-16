"use strict";

var counter = 1;

while (counter < 65536) {
    counter = counter * 2;
    console.log(counter)

}

var allCones = Math.floor(Math.random() * 50) + 50;
var noMoreCones;


do {
    var cones = Math.floor(Math.random() * 5) + 1;
    console.log(cones + " cones please");
    if (allCones >= cones) {
        allCones = allCones - cones;
        console.log("I have " + allCones + " left");
    } else {
        console.log("I do not have enough cones, I have " + allCones + " left");
    }
    noMoreCones = (allCones > 0);


} while (noMoreCones);
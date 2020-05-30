"use strict";
var greet = function () {
    console.log("Heloo world");
};
var greeting;
// greeting = 'dvs';
greeting = function () {
    console.log("this is function");
};
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(4, 3);
add(9, 3, "fdfgdds");
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 17);
console.log("dev: result", result);
// result = "svcadv"

const readlineSync = require("readline-sync");
let questions = 3;
let name = readlineSync.question(questions-- + " What is your name? ");
let age = readlineSync.question(questions-- + " What is your age? ");
let city = readlineSync.question(questions-- + " Wich city are you now? ");
console.log("Fuck, " + name + " i believe you are " + age + " years old. At " + city + " people get terminated reached this age");
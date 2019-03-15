const readlineSync = require("readline-sync");
let shoesize = readlineSync.question("What is your shoesize?");
let birthyear = readlineSync.question("What is your birthyear?");
console.log((shoesize * 2 + 5) * 50 - birthyear + 1766);
/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" 
 * and outputs the number of "ha"s that you pass in as an argument.
 */

var laugh = /* finish the function expression */
function (max) {
    var sound = "";
    for (i=0;i<max;i++) {
        sound += "ha"
    }
    return sound; 
}
console.log(laugh(10));
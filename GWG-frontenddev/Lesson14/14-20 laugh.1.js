/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" 
 * and outputs the number of "ha"s that you pass in as an argument.
 */

 // palying with the function
const laugh = /* finish the function expression */
function (max) {
    const sound = "";
    for (i=0;i<max;i++) {
        sound += "ha"
    }
    sound += "!"
    return sound; 
}
console.log(laugh(3));
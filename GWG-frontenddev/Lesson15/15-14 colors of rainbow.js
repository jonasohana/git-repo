/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 * Using only the splice() method, insert the missing colors into the array, and
 *  remove the color "Blackberry" by following these steps:
 * 
 * 1) Remove "Blackberry"
 * 2) Add "Yellow" and "Green"
 * 3) Add "Purple"
 * Expected result: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

rainbow.splice(-2,1, "Yellow", "Green");

rainbow.splice(-1,0, "Purple" ); // incorrect output
// output: ["Red", "Orange", "Yellow", "Green", "Purple", "Blue"]

//rainbow.splice (rainbow.length,0,"Purple"); // correct output
// output: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]

console.log(rainbow);



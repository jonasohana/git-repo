/*
 * Programming Quiz: Cry (5-5)
 * Write a named function expression that stores the function in a variable called cry and returns "boohoo!". 
 * Don't forget to call the function using the variable name, not the function name:
 */

// your code goes here
/*
 * Programming Quiz: Laugh (5-4)
 * Write an anonymous function expression that stores a function in a variable called "laugh" 
 * and outputs the number of "ha"s that you pass in as an argument.
 */

 // palying with the function
 const cry = /* <- call the function using the variable name : cry  */
 function bo (max) { /* NOT the function */
     const sound = "";
     for (i=0;i<max;i++) {
         sound += "bo"
     }
     sound += "!"
     return sound; 
 }
 console.log(cry(3));
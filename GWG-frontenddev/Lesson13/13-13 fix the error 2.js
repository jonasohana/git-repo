/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
/*
for (var k = 0 k < 200 k++) {
    console.log(k);
}
*/
// does not follow Udacity Guidelines
console.log("var");
for (var k = 0;k < 5;k++) {
    console.log(k);
}


// this works
console.log("let");
for (let m = 0;m < 5;m++) {
    console.log(m);
}

// no declaration
console.log("no declaration");
for (n = 0;n < 5;n++) {
    console.log(n);
}


// Error 
/*
VM299:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:27
*/
console.log("const - error");
for (const l = 0;l < 5;l++) {
    console.log(l);
}

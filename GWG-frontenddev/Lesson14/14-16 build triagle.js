/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
 
function makeLine(length) {
    const line = "";
    for (const j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(base) {
    const output =""; 
    for (const i=1;i<=base;i++) {
        output += makeLine(i);
    }
    return output; 

}

// test your code by uncommenting the following line
console.log(buildTriangle(10));
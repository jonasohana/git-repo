/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
*/
var x = 1;


while (x <= 20) {
    // check divisibility
    // print Julia, James, JuliaJames, or number
    // test if either or both are true -  

    output = "";
    if (x % 3 === 0) {
        output = "Julia";
    }
    if (x % 5 === 0) {
        output += "James";
    }
    if (  !((x % 3 === 0) || (x % 5 === 0)) ) { // if any cond false - print number
        output = x;
    }
    console.log (output);
    // increment x
    // x = ++x;
    x = x + 1;
}

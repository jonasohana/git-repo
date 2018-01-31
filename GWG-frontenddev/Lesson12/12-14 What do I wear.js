/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
// lower bounds - test 1 - N/A
var shirtWidth = 17.99; // ob //
var shirtLength = 28;
var shirtSleeve = 8.13;

// lower bounds - test 1 - N/A
var shirtWidth = 18;
var shirtLength = 26; // ob //
var shirtSleeve = 8.13;

// lower bounds - test 1 - N/A
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.12; // ob //


// test small 
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8.13;

var shirtWidth = 19.99;
var shirtLength = 28.99;
var shirtSleeve = 8.37;

// test medium 
var shirtWidth = 20;
var shirtLength = 29;
var shirtSleeve = 8.38;

var shirtWidth = 20.99;
var shirtLength = 29.99;
var shirtSleeve = 8.62;

// test large 
var shirtWidth = 22;
var shirtLength = 30;
var shirtSleeve = 8.63;

var shirtWidth = 22.99;
var shirtLength = 30.99;
var shirtSleeve = 8.87;

// test xl 
var shirtWidth = 24;
var shirtLength = 31;
var shirtSleeve = 8.88;

var shirtWidth = 25.99;
var shirtLength = 32.99;
var shirtSleeve = 9.62;

// test 2xl 
var shirtWidth = 26;
var shirtLength = 33;
var shirtSleeve = 9.63;

var shirtWidth = 27.99;
var shirtLength = 33.99;
var shirtSleeve = 10.12;

// test 3xl 
var shirtWidth = 28;
var shirtLength = 34;
var shirtSleeve = 10.13;

var shirtWidth = 30.99;
var shirtLength = 35.99;
var shirtSleeve = 12.12;


// test N/A each 
var shirtWidth = 18; // size S (small)
var shirtLength = 28.5; // size S (small)
var shirtSleeve = 8.47; // size M (medium)

var shirtWidth = 20; // size M (medium)
var shirtLength = 30; // size L (large)
var shirtSleeve = 8.62; // size M (medium)


var shirtWidth = 24; // size XL (Xlarge)
var shirtLength = 31; // size XL (Xlarge)
var shirtSleeve = 10.13; // size 2XL (2Xlarge)
/* */

// your code goes here
/* Output: S, M, L, XL, 2XL, 3XL  
If shirtWidth, shirtLength, and shirtSleeve all are within the range of acceptable values 
for a specific size, then print <size> to console (for example "L")

Output: N/A 
If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values 
for a specific size, then print N/A to the console */

if ( (shirtWidth >= 18 &&  shirtWidth < 20) // lower and upper for S //
    && (shirtLength >= 28 &&  shirtLength < 29)
    && (shirtSleeve >= 8.13 &&  shirtSleeve < 8.38) ) {
        console.log("S");
    } else if ( (shirtWidth >= 20 && shirtWidth < 22) // upper end for M //
    && (shirtLength >= 29 && shirtLength < 30)
    && (shirtSleeve >= 8.38 && shirtSleeve < 8.63) ) {
        console.log("M");
    } else if ((shirtWidth >= 22 && shirtWidth < 24) // upper end for L //
    && (shirtLength >= 30 && shirtLength < 31)
    && (shirtSleeve >= 8.63 && shirtSleeve < 8.88) ) {
        console.log("L");
    } else if ((shirtWidth >= 24 && shirtWidth < 26) // upper end for XL //
    && (shirtLength >= 31 && shirtLength < 33)
    && (shirtSleeve >= 8.88 && shirtSleeve < 9.63) ) {
        console.log("XL");
    } else if ((shirtWidth >= 26 && shirtWidth < 28) // upper end for 2XL //
    && (shirtLength >= 33 && shirtLength < 34)
    && (shirtSleeve >= 9.63 && shirtSleeve < 10.13) ) {
        console.log("2XL")
    } else if ((shirtWidth >= 28) // upper end for 3XL //
    && ( shirtLength >= 34)
    && (shirtSleeve >= 10.13) ) {
        console.log("3XL"); 
    } else { // any width, length, sleeve is out of range for a size //
        console.log("N/A"); 
    }



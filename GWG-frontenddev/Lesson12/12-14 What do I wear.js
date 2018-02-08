/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
// lower bounds - test 1 - N/A
const shirtWidth = 17.99; // ob //
const shirtLength = 28;
const shirtSleeve = 8.13;

// lower bounds - test 2 - N/A
const shirtWidth = 18;
const shirtLength = 26; // ob //
const shirtSleeve = 8.13;

// lower bounds - test 3 - N/A
const shirtWidth = 18;
const shirtLength = 28;
const shirtSleeve = 8.12; // ob //


// test small 
const shirtWidth = 18;
const shirtLength = 28;
const shirtSleeve = 8.13;

const shirtWidth = 19.99;
const shirtLength = 28.99;
const shirtSleeve = 8.37;

// test medium 
const shirtWidth = 20;
const shirtLength = 29;
const shirtSleeve = 8.38;

const shirtWidth = 20.99;
const shirtLength = 29.99;
const shirtSleeve = 8.62;

// test large 
const shirtWidth = 22;
const shirtLength = 30;
const shirtSleeve = 8.63;

const shirtWidth = 22.99;
const shirtLength = 30.99;
const shirtSleeve = 8.87;

// test xl 
const shirtWidth = 24;
const shirtLength = 31;
const shirtSleeve = 8.88;

const shirtWidth = 25.99;
const shirtLength = 32.99;
const shirtSleeve = 9.62;

// test 2xl 
const shirtWidth = 26;
const shirtLength = 33;
const shirtSleeve = 9.63;

const shirtWidth = 27.99;
const shirtLength = 33.99;
const shirtSleeve = 10.12;

// test 3xl 
const shirtWidth = 28;
const shirtLength = 34;
const shirtSleeve = 10.13;

const shirtWidth = 30.99;
const shirtLength = 35.99;
const shirtSleeve = 12.12;


// test N/A each 
const shirtWidth = 18; // size S (small)
const shirtLength = 28.5; // size S (small)
const shirtSleeve = 8.47; // size M (medium)

const shirtWidth = 20; // size M (medium)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.62; // size M (medium)


const shirtWidth = 24; // size XL (Xlarge)
const shirtLength = 31; // size XL (Xlarge)
const shirtSleeve = 10.13; // size 2XL (2Xlarge)
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



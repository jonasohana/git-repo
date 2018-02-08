/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
// follow decision tree from left to right - top to bottom 
// check balance - false //
const balance = 325.00;
const checkBalance = false;
const isActive = false;


// check balance - true AND account active AND balance > 0  //
const balance = 325.00;
const checkBalance = true;
const isActive = true;


// check balance - true AND account NOT active AND balance > 0  //
const balance = 325.00;
const checkBalance = true;
const isActive = false;


// check balance - true AND account IS active AND balance = 0  //
const balance = 0;
const checkBalance = true;
const isActive = true;


// check balance - true AND account IS active AND balance = -1  //
const balance = -1;
const checkBalance = true;
const isActive = true;


// your code goes here
// If checkBalance equals true and isActive equals false, then Your account is no longer active. should be printed to the console.
if (checkBalance) { // checkBalance is true //
    if (isActive && balance > 0 ) { // isActive AND balance > 0  //
        console.log("Your balance is $" + balance.toFixed(2) + "." );  
        } else if (!isActive) { // !isActive AND !balance > 0  //
            console.log("Your account is no longer active." );  
        } else if (balance === 0 ) { // isActive AND balance = 0  //
            console.log("Your account is empty.");  
            } else {  // isActive AND balance < 0  //
                console.log("Your balance is negative. Please contact bank.");  
            }
} else { // checkBalance is false //
    console.log("Thank you. Have a nice day!");  
}
/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code

// test false topping //
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// test false vessel //
var flavor = "strawberry";
var vessel = "hat";
var toppings = "peanuts";

// test false flavor //
var flavor = "bacon";
var vessel = "cone";
var toppings = "peanuts";

// test true all first instance //
var flavor =  "vanilla" ;
var vessel = "cone";
var toppings =  "sprinkles";

// test true all second instance //
var flavor = "chocolate";
var vessel = "bowl";
var toppings = "peanuts";
/**/

// Add your code here
if ((flavor === "vanilla" || flavor ==="chocolate" ) 
    && (vessel === "cone" || vessel === "bowl") 
    && (toppings === "sprinkles" || toppings === "peanuts" )) {
        console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".");
}
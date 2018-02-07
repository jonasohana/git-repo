var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];

donuts.splice(1, 2, "chocolate cruller", "creme de leche"); 
// from index 1 - removes "chocolate frosted" and  "Boston creme" 
// then adds "chocolate cruller" and "creme de leche" starting at index 1

//and

// removing and adding an element - think replacement
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// remove - counting form the back 
// use -number given end is -1
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon','humuhumu'];
var removed = myFish.splice(-3, 1);

// myFish is ["angel", "clown", "sturgeon", "humuhumu"] 
// removed is ["mandarin"] - 3 steps from the back

// remove no elements and insert 1 element
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed




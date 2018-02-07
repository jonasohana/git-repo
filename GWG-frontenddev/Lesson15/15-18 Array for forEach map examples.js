// function using for() loop
// inline using forEach()
// .map - new array returned

// for ()
// for loops - control over looping, specific elements
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// forEach - array.forEach
// .forEach
// only pass one argument
//  entire array - start to finish
//  access each element direclty w/o using index
// inline - 
// used when not where else called 
donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

// MDN - callback is invoked with three arguments:
// forEach run like a for loop for arrays 
// - element, index, and array
// element = the value 
// index - index position
// array - the entire array

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }
  
  new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);


// Map - array.map
// .map - define callback for each element
// only pass one argument - used as the element
// returns new array - improvedDonuts

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

// review both 

// map: change value using function
var numbers = [1, 4, 9, 16];
var doubles = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers);

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]

// map: change value using argument
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



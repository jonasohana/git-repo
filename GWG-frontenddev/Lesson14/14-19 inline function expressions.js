// first block uses named expression  
// second block uses inline function expression using anonymous function expression 

// named function expression
// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  };
  
  // Function declaration that has two parameters: a function for displaying
  // a message, along with a name of a movie
  function movies(messageFunction, name) {
    messageFunction(name);
  }
  
  // Call the movies function, pass in the favoriteMovie function and name of movie
  movies(favoriteMovie, "Moana <-named");

// inline function expression using anonymous function expression 
// note the ENTIRE typed function statement is passed into the function
/* passed 
function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  }, "Moana <-inline anon"
*/  
// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
  }
  
  // Call the movies function, pass in the ENTIRe typed function and name of movie
  movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
  }, "Moana <-inline anon");
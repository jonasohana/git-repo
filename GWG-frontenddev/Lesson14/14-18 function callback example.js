// function expression catSays
const catSays = function(max) {
    console.log("inside catSays");
    const catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  };
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
      console.log("inside helloCat");
    return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  helloCat(catSays);
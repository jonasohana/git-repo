// this code example to illustrate hoisting 
function cat() {
    //console.log(meow(2)); // function expression is not hoisted
    console.log( purr() ); // function declaration is hoisted
    var meow = function (max) {
        var catMessage = "";
        for (var i=0;i<max;i++){
            catMessage +="meow";
        }
        return catMessage;
    }
    function purr() {
        return "purrrr!";
    }
}

cat();
/*  error should display
*   VM613:3 Uncaught TypeError: meowerr is not a function
*   at caterr (<anonymous>:3:18)
*   at <anonymous>:16:1
*
*/

function caterr() {
    //console.log(meow(2)); // function expression is not hoisted
    console.log( meowerr(2) ); // function declaration is hoisted
    var meowerr = function (max) {
        var catMessage = "";
        for (var i=0;i<max;i++){
            catMessage +="meow";
        }
        return catMessage;
    }
    function purrerr() {
        return "purrrr!";
    }
}

caterr();

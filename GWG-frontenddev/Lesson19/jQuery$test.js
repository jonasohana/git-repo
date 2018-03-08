if (typeof $ != 'undefined') {  
    // $ is loaded => print the version
    console.log("$ is good")
} else {
    console.log("$ is undefined")
};
if (typeof jQuery != 'undefined') {  
    // jQuery is loaded => print the version
    console.log("jQuery version " + jQuery.fn.jquery)
} else {
    console.log("jQuery" + 'undefined')
};
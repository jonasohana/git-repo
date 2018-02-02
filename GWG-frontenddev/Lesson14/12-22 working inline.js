function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num){
    var ha = "";
    for(var x = 1; x <= num; x++){
        ha += "ha";
    }
    return ha + "!";
});
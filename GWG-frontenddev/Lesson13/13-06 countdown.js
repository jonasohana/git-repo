/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.

 Orbiter transfers from ground to internal power (T-50 seconds)
 Ground launch sequencer is go for auto sequence start (T-31 seconds)
 Activate launch pad sound suppression system (T-16 seconds)
 Activate main engine hydrogen burnoff system (T-10 seconds)
 Main engine start (T-6 seconds)
 Solid rocket booster ignition and liftoff! (T-0 seconds)
 NOTE: "T-50 seconds" read as "T-minus 50 seconds".
 */

// your code goes here
var countdown = 60;


while (countdown >= 0 ) {
    //output = "";
    switch (countdown) {
        case 50:
          console.log("Orbiter transfers from ground to internal power");
          break; 
        case 31:
          console.log("Ground launch sequencer is go for auto sequence start");
          break; 
        case 16:
          console.log("Activate launch pad sound suppression system");
          break; 
        case 10:
          console.log("Activate main engine hydrogen burnoff system");
          break; 
        case 6:
          console.log("Main engine start");
          break; 
        case 0:
          console.log("Solid rocket booster ignition and liftoff!");
          break; 
        default:
            console.log("T-"+countdown+" seconds");
      }
    // decrement the counter 
    countdown = --countdown;
}

/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
/*
the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
*/

// test value - true 
/*
const room = "ballroom";
const suspect = "Mr. Kalehoff";

const room = "gallery";
const suspect = "Ms. Van Cleve";

const room = "billiards room";
const suspect = "Mrs. Sparr";

const room = "dining room";
const suspect = "Mr. Parkes";
*/

// test value - false 
/*
const room = "gallery";
const suspect = "Mr. Kalehoff";

const room = "dining room";
const suspect = "Ms. Van Cleve";

const room = "gallery";
const suspect = "Mrs. Sparr";

const room = "gallery";
const suspect = "Mr. Parkes";
*/

const room = "dining room";
const suspect = "Mr. Parkes";

const weapon = "";
const solved = false;

/*
the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
*/

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
	weapon = "poison";
	solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
	weapon = "trophy";
	solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
	weapon = "pool stick";  
	solved = true; 
} else if ( room === "dining room" && suspect === "Mr. Parkes")  {
	weapon = "knife";
	solved = true;
}

if (solved) {
	console.log(suspect + " did it in the "+ room +" with the "+weapon+"!");
	/* Example: __________ did it in the __________ with the __________!
	If room equals "gallery" and "suspect" equals Ms. Van Cleve, then 
	Ms. Van Cleve did it in the gallery with the trophy! should be printed to the console. */
}

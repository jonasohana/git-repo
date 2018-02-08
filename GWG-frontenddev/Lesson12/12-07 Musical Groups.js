/*
 * Programming Quiz: Musical Groups (3-3)
 */

// change the value of `musicians` to test your conditional statements
const musicians = 1;

if (musicians <= 0) {
    console.log("not a group"); /*if musicians is less than or equal to 0*/
} else if (musicians == 1) {
    console.log("solo");        /*if musicians is equal to 1*/
} else if (musicians == 2) {
    console.log("duet");        /*if musicians is equal to 2*/
} else if (musicians == 3) {
    console.log("trio");        /*if musicians is equal to 3*/
} else if (musicians == 4) {
    console.log("quartet");         /*if musicians is equal to 4*/
} else if (musicians > 4) {
    console.log("this is a large group"); /* if musicians is greater than 4*/
}
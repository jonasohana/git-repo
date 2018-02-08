/*
 * Programming Quiz: Joining the Crew (6-6)
 * Use the push() method to add the three new crew members to the crew array.

const doctor = "Simon";
const sister = "River";
const shepherd = "Book";
 */

const captain = "Mal";
const second = "Zoe";
const pilot = "Wash";
const companion = "Inara";
const mercenary = "Jayne";
const mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

const doctor = "Simon";
const sister = "River";
const shepherd = "Book";

// your code goes here
crew.push(doctor,sister,shepherd);
console.log(crew);

// set variables by reading ElementID 
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const sizePicker = document.getElementById("sizePicker");

// display values to console.log
// console.log(color.value);
// console.log(inputHeight.value);
// console.log(inputWidth.value);

// set listener to sizePicker submit button
sizePicker.addEventListener("submit", 
    function(evt) {
        // unless explicitly handled, prevent default event handling 
        evt.preventDefault();  
        makeGrid ()
        }
,false);

// create grid 
function makeGrid () {
    // reset/clear  table
    table.innerHTML = "";

    // build a table using Node 'tr' and 'td'
    let tr, td;
    for (h=0; h<inputHeight.value; h++) {
        // h = height 
        tr = document.createElement('tr'); // create Node 'tr' table row
        table.appendChild(tr); // append the row and cell(s) to table
        for (j=0; j<inputWidth.value; j++) {
            // w = width 
            td = document.createElement('td'); // create Node 'Td' - table cell 
            tr.appendChild(td); // append cell(s) within a row 
        }
    }
    // console.log(table.innerHTML);
} // makeGrid()

// set backgound color of clicked target within the table to current color / colorPicker
table.addEventListener('mousedown', function(evt) {
    // mousedown captures single td 
    evt.target.style.backgroundColor = color.value; 
    // console.log(evt.target.value);
    // console.log(evt.toElement);
    // console.log(evt.target);
    }
,false);

// let flag = 0;
// table.addEventListener("mousedown", function(){
//     flag = 0;
// }, false);
// table.addEventListener("mousemove", function(){
//     flag = 1;
// }, false);
// table.addEventListener("mouseup", function(evt){
//     if(flag === 0){
//         console.log("click");
//         evt.target.style.backgroundColor = color.value; 
//     }
//     else if(flag === 1){
//         console.log("drag");
//     }
// }, false);
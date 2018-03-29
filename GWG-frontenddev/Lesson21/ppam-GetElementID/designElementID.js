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

        // alert('hello alert');
        console.log('submit');
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
table.addEventListener('click', function(evt) {
    evt.target.style.backgroundColor = color.value; 
    }
,false);
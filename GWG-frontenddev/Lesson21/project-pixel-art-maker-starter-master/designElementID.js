// set variables by reading ElementID 
const table = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');


console.log(color.value);
console.log(inputHeight.value);
console.log(inputWidth.value);

// function makeGrid () {
//     // reset/clear  table
//     table.innerHTML = "";

//     // build a table using Node 'tr' and 'td'
//     for (h=0; h<inputHeight.value; h++) {
//         // h = height 
//         var row = document.createElement('tr'); // create Node 'tr' table row
//         for (w=0; w<inputWidth.value;  w++); {
//             // w = width 
//             var cell = document.createElement('td'); // create Node 'Td' - table cell 
//             row.appendChild(cell); // append cell(s) within a row 
//         }
//         document.getElementById('pixelCanvas').appendChild(row); // append the row and cell(s) to table
//     }
//     console.log(table.innerHTML);
// }; // makeGrid()


// function loaded() {
//     document.getElementById("sizePicker").addEventListener("submit",
//             function(event) {
//                 event.preventDefault();
//                 // this.id will show "form"
//                 alert(this.id);},
//                 false);
// }
// function sayHello () {
//     console.log('hello');

// function loaded() {
    document.getElementById("sizePicker").addEventListener("submit", 
        function(evt) {
            evt.preventDefault();
            // alert('hello alert');
            console.log('hello');
            }
    ,false);

    // function makeGrid () {
    //     // reset/clear  table
    //     table.innerHTML = "";

    //     // build a table using Node 'tr' and 'td'
    //     for (h=0; h<inputHeight.value; h++) {
    //         // h = height 
    //         var row = document.createElement('tr'); // create Node 'tr' table row
    //         for (w=0; w<inputWidth.value;  w++); {
    //             // w = width 
    //             var cell = document.createElement('td'); // create Node 'Td' - table cell 
    //             row.appendChild(cell); // append cell(s) within a row 
    //         }
    //         document.getElementById('pixelCanvas').appendChild(row); // append the row and cell(s) to table
    //     }
    //     console.log(table.innerHTML);
    // } // makeGrid()

// }
// window.addEventListener("load", loaded, false);




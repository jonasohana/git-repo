// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    $('tr').remove(); // When function first runs, it first clears out any table rows that may be there previously. This is so multiple grids don't stack when submit is pressed

 
    const height = $("#inputHeight").val();
    const width = $("#inputWidth").val();
    const boxRow = $("<tr></tr>");
    const boxCol = $("<td></td>");
    const table = $('#pixelCanvas');





    for(let i = 0; i < width; i++) { // Adds columns to the row object
        boxRow.append(boxCol.clone());
    };
    for(let i = 0; i < height; i++) { // Clones the row object with the columns to the pixelCanvas
        table.append(boxRow.clone());
    };
    $("td").click(function() { // Function runs when a td (box) is clicked. Grabs color, assigns as bgcolor for clicked box
        let color = $("#colorPicker").val();
        $(this).css('backgroundColor', color);
    })
}

$('#submitBtn').click(function() { // Runs makeGrid function, stops page from refreshing when submit is pressed
    makeGrid();
    return false;
});
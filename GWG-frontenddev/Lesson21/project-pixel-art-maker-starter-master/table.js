function generate_table() {
        for (var i = 0; i < inputHeight.val(); i++) {
            var row = document.createElement('tr');
            for (var j = 0; j < inputWidth.val(); j++) {
                var cell = document.createElement('td');
                row.appendChild(cell);
        }
        table.appendChild(row);
    }
    // add click listener after created 
    // $( "td" ).click(function() {
    //     console.log( "click() called " );
    // });

    // $( 'td' ).on( 'click', function( evt ) {
    //     evt.preventDefault();
    //     console.log( 'You clicked a link!  on event:' + event.type + 
    //     ' at X:' +  event.pageX + ' Y:' +  event.pageY
    //     );
    //     console.log("Cell index is: " + (this).cellIndex);
    // colorPicker.addEventListener("input", updateFirst, false);
    // colorPicker.addEventListener("change", watchColorPicker, false);
    
    function watchColorPicker(event) {
      document.querySelectorAll("p").forEach(function(p) {
        p.style.color = event.target.value;
      });
    }
//     $('#input').on('change', function() {
//         var val;
//         val = $('#input').val(); // read input val 
//         $('.articles').children('h1').text(val); // set val into h1
//    }); 

        $("td").on('click', 
        // $("td").hover(
            function() {
            //   $(this).css('background-color', color);
            //   $(this).css('color', color);
              $(this).css('background-color', '#ff0000');
              $(this).css('color', '#000000');
            }
        );

    // });

    }
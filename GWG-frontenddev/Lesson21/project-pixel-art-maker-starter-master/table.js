function generate_table() {
      // get the reference for the body
      var body = document.getElementsByTagName("body")[0];
     
      // creates a <table> element and a <tbody> element
      var tbl = document.createElement("table");
      var tblBody = document.createElement("tbody");
     
      // creating all cells
      for (var i = 0; i < 10; i++) {
        // creates a table row
        var row = document.createElement("tr");
     
        for (var j = 0; j < 10; j++) {
          // Create a <td> element and a text node, make the text
          // node the contents of the <td>, and put the <td> at
          // the end of the table row
          var cell = document.createElement("td");
        // var cellText = document.createTextNode("cell in row "+i+", column "+j);
          var cellText = document.createTextNode(i+","+j);
          cell.appendChild(cellText);
          row.appendChild(cell);
        // PJ 3/18 add id per cell 

        // $( 'tr' ).on( 'click', 'ld',  function() {
        //     console.log( $(this).cellIndex + cellText );

        // });

        // trList.first().children("a").toggleClass("href");
        // trList.first().children("a").attr("href","#1");
        }
     
        // add the row to the end of the table body
        tblBody.appendChild(row);
      }
     
      // put the <tbody> in the <table>
      tbl.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tbl);
      // sets the border attribute of tbl to 2;
      tbl.setAttribute("border", "2");

    }
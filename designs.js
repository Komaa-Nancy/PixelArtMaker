// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;
$(document).ready(function() {
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    makeGrid(height, width);
    registerMouseHandlers();
    // calling addColor in the size picker 
});
});

function makeGrid() {
// Your code goes here!
//.remove()clears the table data
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    table = $('#pixelCanvas');

for (var i = 1; i <= height; i++) {
	//what creates the row
      row = $('<tr></tr>').appendTo(table);
      for (var j = 1; j <=width; j++) {
      	// creating the columns
          row.append('<td></td>');
        }
    }
}
// this function then Clears the grid 
function clearGrid() {
    $('#pixel_canvas').children().remove();
}

// add colors to the cells by way of mouse movement

function registerMouseHandlers() {
    
    let mouseIsDown = false;

    $('td').on('mousemove', function() {
        if (mouseIsDown) {
            let color = $('#colorPicker').val();
            $(this).css('backgroundColor', color);
        }
    });

    $('td').on('mousedown', function() {
        mouseIsDown = true;
    });

    $('td').on('mouseup', function() {
        mouseIsDown = false;
    });

    // adding color to single cell //
    $('td').on('click', function() {
        let color = $('#colorPicker').val();
        $(this).css('backgroundColor', color);
    });

    // removing color from the cell //      
    $('td').on('dblclick', function() {
        $(this).css('background', 'none');
    })
}
/*
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
*/
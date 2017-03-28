

var heightElem = document.getElementById("height");
var brickElem = document.getElementById("brick");
var sliderValue = document.getElementById("height").value;
brickElem.onchange = BuildPyramid;
heightElem.oninput = BuildPyramid;


BuildPyramid();
// set a handler function for the form's submission event
function BuildPyramid() {
    heightStr = heightElem.value;
    height = parseInt(heightStr);
    brick = brickElem.value;
    document.getElementById("sliderVal").innerHTML=height;
    document.getElementById("height").innerHTML= height;

    // draw pyramid with the specified height
    drawPyramid(height, brick);
};


/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height, brick) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";


    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);

    }
}

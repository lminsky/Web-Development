document.getElementById("buttonEncode").addEventListener("click", encode);

function encode() {
  console.log("Button Pressed");
}

/* Getting the ASCII value from a character in a string:
  var x = "Hello World";        Start with a string variable
  var xVal = x.charCodeAt(0)   Call the charCodeAt method on the string object
                                The parameter it takes is a position in the string
                                e.g. 0 is H, 1 is e, 2 is l, etc
                                It will return the ASCII value of the character in that position
  console.log(xVal)             Prints: 72 to the console
*/
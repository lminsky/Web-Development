var input = document.getElementById("inputElement");
var button = document.getElementById("addElement");
var output = document.getElementById("output");
var vowels = ["a", "e", "i", "o", "u", "y"];
input.focus();

button.addEventListener("click", function(event) {
  console.log(event);
  addElement();
});
input.addEventListener("keypress", function(event){
  console.log(event.target);
});


function addElement() {
  var text = input.value;
  if(text.length == 0) { return false; }
  var letter = text.toLowerCase().charAt(0);

  var li = document.createElement("li");
  var textNode = document.createTextNode(text);
  li.appendChild(textNode);

  if(vowels.indexOf(letter) != -1) {
    li.setAttribute("class", "vowel");
  }

  output.appendChild(li);
  input.value = "";
  input.focus();
}
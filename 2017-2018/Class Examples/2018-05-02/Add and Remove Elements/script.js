var input = document.getElementById("inputElement");
var button = document.getElementById("addElement");
var output = document.getElementById("output");
var deleteEvens = document.getElementById("deleteEven");
var deleteOdds = document.getElementById("deleteOdd");
var vowels = ["a", "e", "i", "o", "u", "y"];
input.focus();

button.addEventListener("click", addElement);
deleteEvens.addEventListener("click", function(e) {
  deleteElements(e.target.id);
});
deleteOdds.addEventListener("click", function(e) {
  deleteElements(e.target.id);
});
input.addEventListener("keyup", function(e) {
  if(e.code == "Enter") {
    addElement();
  }
});

function addElement() {
  var text = input.value;
  if(text.length == 0) { return false; }
  var letter = text.toLowerCase().charAt(0);

  var li = document.createElement("li");
  var textLength = " (" + text.length + ")";
  textLength = "";
  var textNode = document.createTextNode(text + textLength);
  li.appendChild(textNode);

  if(vowels.indexOf(letter) != -1) {
    li.setAttribute("class", "vowel");
  }

  output.appendChild(li);
  input.value = "";
  input.focus();
}

function deleteElements(id) {
  var zeroOrOne = 1;
  if(id == "deleteEven") zeroOrOne = 0;
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    var text = items[i].innerText;
    if(text.length%2 == zeroOrOne) {
      output.removeChild(items[i]);
      i--;
    }
  }
}
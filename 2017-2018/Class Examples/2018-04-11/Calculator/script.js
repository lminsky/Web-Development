var addButton = document.getElementById("addButton");
addButton.addEventListener("click", add);

var subtractButton = document.getElementById("subtractButton");
subtractButton.addEventListener("click", subtract);

var multiplyButton = document.getElementById("multiplyButton");
multiplyButton.addEventListener("click", multiply);

var divideButton = document.getElementById("divideButton");
divideButton.addEventListener("click", divide);

function add() {
  var val1 = document.getElementById("input1").value;
  val1 = parseInt(val1);
  var val2 = document.getElementById("input2").value;
  val2 = parseInt(val2);

  var output = val1+val2;
  document.getElementById("output").innerHTML = output;
}

function subtract() {
  var val1 = document.getElementById("input1").value;
  val1 = parseInt(val1);
  var val2 = document.getElementById("input2").value;
  val2 = parseInt(val2);

  var output = val1-val2;
  document.getElementById("output").innerHTML = output;
}

function multiply() {
  var val1 = document.getElementById("input1").value;
  val1 = parseInt(val1);
  var val2 = document.getElementById("input2").value;
  val2 = parseInt(val2);

  var output = val1*val2;
  document.getElementById("output").innerHTML = output;
}

function divide() {
  var val1 = document.getElementById("input1").value;
  val1 = parseInt(val1);
  var val2 = document.getElementById("input2").value;
  val2 = parseInt(val2);

  var output = val1/val2;
  document.getElementById("output").innerHTML = output;
}











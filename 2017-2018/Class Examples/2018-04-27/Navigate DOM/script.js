document.getElementById("button").addEventListener("click", doSomething);

function doSomething() {
  console.log("Button Pressed");
  var list = document.getElementById("rainbow");
  console.log(list.childNodes);
}
document.getElementById("button").addEventListener("click", doSomething);

function doSomething() {
  console.log("Button Pressed");
  var test = document.getElementById("rainbow");
  if(test.hasChildNodes()) {
    test = test.firstChild;
    while(test.nextSibling != null) {
      console.log(test);
      test = test.nextSibling;
      console.log(test.nodeName)
    }
  }

}
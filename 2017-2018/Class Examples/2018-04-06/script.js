var button = document.getElementById("b1");
button.addEventListener("click", buttonPress);
var counter = 0;

function buttonPress() {
  counter++;
  document.getElementById("scriptable")
    .innerHTML = "You pushed the button " + counter + " times.";

  if(counter == 1) {
    document.getElementById("scriptable")
    .innerHTML = "You pushed the button 1 time.";
  }
}












var button = document.getElementById("b1");
button.addEventListener("click", buttonPress);
var counter = 0;

function buttonPress() {
  counter++;
  var scriptableDiv = document.getElementById("scriptable");
  
  console.log(Math.random() * 5);

  scriptableDiv.style.color = "blue";
  document.body.style.backgroundColor = "red";


  scriptableDiv.innerHTML = "You pushed the button " + counter + " times.";
  if(counter == 1) {
    scriptableDiv.innerHTML = "You pushed the button 1 time.";
  }
}












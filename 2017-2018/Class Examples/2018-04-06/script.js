// document.write('<h1>Hello World</h1>');
// console.log(document);
// console.log(window);
// window.alert("hello world");
// window.close();

// var s = document.getElementById("scriptable");
// console.log(s.innerHTML);
// s.innerHTML = "I changed the div";
// s.style.backgroundColor = "red";

// function samir(x, y) {
//   return x * x + y % x;
// }

// var temp = samir(2, 3);
// s.innerHTML = temp;

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












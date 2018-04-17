document.getElementById("button").addEventListener("click", fn);

function fn() {
  var str = document.getElementById("input").value;

  console.log(str);

  for(var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }
}
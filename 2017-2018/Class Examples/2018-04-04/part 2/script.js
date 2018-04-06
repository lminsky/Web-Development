document.write('<h1>Hello World</h1>');
console.log(document);
console.log(window);
// window.alert("hello world");
// window.close();

var s = document.getElementById("scriptable");
console.log(s.innerHTML);
s.innerHTML = "I changed the div";
s.style.backgroundColor = "red";
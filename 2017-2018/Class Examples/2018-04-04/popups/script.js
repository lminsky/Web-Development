document.write('<h1>This is a website</h1>');
console.log(document);
console.log(window);
window.alert("I'm going to try to open a lot of popups.");
// window.close();
// console.log(window.history);
// window.history.back();
for(var i = 0; i < 28; i++) {
  var popup = window.open("", "", "height=200,width=200");
  popup.document.write("<h1>Look at all my popups</h1>");
  popup.document.write("<p>This is popup number " + (i+1) + "!");
  popup.moveTo(200 * (i%7), 220 * (Math.floor(i/7)))
}
window.focus();

/*
This is a block comment 
*/
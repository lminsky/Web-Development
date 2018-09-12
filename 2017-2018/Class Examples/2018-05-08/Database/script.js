var config = {
apiKey: "AIzaSyCItJk-gZJEKrc1_EeojSu34aYjjzj9u1k",
authDomain: "list-a71e9.firebaseapp.com",
databaseURL: "https://list-a71e9.firebaseio.com",
projectId: "list-a71e9",
storageBucket: "list-a71e9.appspot.com",
messagingSenderId: "535106653853"
};
firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function(result) {
  console.log(result);
}).catch(function(error) {
  console.log(error);
});

firebase.database().ref('Jack').on('child_added', function(snapshot){
  text = snapshot.val();
  var letter = text.toLowerCase().charAt(0);

  var li = document.createElement("li");
  var textNode = document.createTextNode(text);
  li.appendChild(textNode);

  if(vowels.indexOf(letter) != -1) {
    li.setAttribute("class", "vowel");
  }

  output.appendChild(li);
});

var input = document.getElementById("inputElement");
var button = document.getElementById("addElement");
var output = document.getElementById("output");
var vowels = ["a", "e", "i", "o", "u", "y"];
input.focus();

button.addEventListener("click", function(event) {
  console.log(event);
  addElement();
});
input.addEventListener("keypress", function(event){
  console.log(event.target);
});


function addElement() {
  var text = input.value;
  if(text.length == 0) { return false; }

  firebase.database().ref('louis/inputs').push(text);

  input.value = "";
  input.focus();
}






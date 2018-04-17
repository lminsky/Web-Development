document.getElementById("countdownButton").addEventListener("click", getDate);

var msToSeconds = 1000;
var msToMinutes = msToSeconds * 60;
var msToHours = msToMinutes * 60;
var msToDays = msToHours * 24;
var then;

function getDate() {
  then = document.getElementById("inputDate").value;
  then = then.split("-");
  document.getElementById("thenDate").innerHTML = then[1] + "/" + then[2] + "/" + then[0];
  then = new Date(then[0], then[1]-1, then[2]);
  setInterval(countdownDate, "1000");
  // countdownDate();
}


function countdownDate() {
  var now = new Date();
  var difference = then - now;
  
  var days = Math.floor(difference / msToDays);
  var hours = Math.floor((difference % msToDays) / msToHours);
  var minutes = Math.floor((difference % msToHours) / msToMinutes);
  var seconds = Math.floor((difference % msToMinutes) / msToSeconds);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("countdown").style.display = "block";
}
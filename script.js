//variables
var messageText;
var noon = 12;
var evening = 17; 
var wakeupTime = 7; 
var lunchTime = 13; 
var partyTime = 21; 
var hackathonTime = 14; 
var time = new Date().getHours();
var message = document.getElementById('timeEvent');
var codeImage = document.getElementById('code');
var image = "img/code.jpg";
var clock = document.getElementById('clock');


var oneSecond = 1000; 
var isPartyTime = false; 
var buttonMessage = document.getElementById("partyTimeButton");
var buttonMessageTxt;
var wakeUpTime;
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTime;
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var hackathonTime;
var hackathonTimeSelector =  document.getElementById("hackathonTimeSelector");

//functions

var updateClock = function()
{	

if (time == partyTime){	
    messageText = "Paaaaaaaaartaaaaay!";
	image = "img/party.jpg";
} else if (time == hackathonTime) {
    messageText = "Hack away!";
	image = "img/hackathon.png";
} else if (time == lunchTime) {
    messageText = "Food o'clock";
	image = "img/lunch.jpg";
} else if (time == wakeupTime) {
    messageText = "Wakey wakey! It's code-o'clock!";
	image = "img/wake.jpg";
} else if (time < noon) { 
    messageText = "Code.Morning";
    image = "img/code.jpg";
} else if (time > evening) {
    messageText = "Code.Evening!";
    image = "img/code.jpg";
} else {
    messageText = "Code.Afternoon!";
    image = "img/code.jpg";
}
message.innerText = messageText;
codeImage.src= image;

var showCurrentTime = function()
{
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";
  
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
     if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
    clock.innerText = clockTime;
}	
showCurrentTime();
};

updateClock(); 	
setInterval( updateClock, oneSecond);

var partyEvent = function() {
    if (isPartyTime === false) {
       isPartyTime = true;
       time = partyTime;
       buttonMessageTxt = "PARTY TIME!";	 
       buttonMessage.style.backgroundColor = "#ffffff";
    }
    else {
       isPartyTime = false;
       time = new Date()
       .getHours();
       buttonMessageTxt = "PARTY OVER!";
       buttonMessage.style.backgroundColor = "#222";
    }
 buttonMessage.innerText = buttonMessageTxt;
 };
 
 var wakeUpEvent = function()
 {
     wakeUpTime = wakeUpTimeSelector.value;
 };
 
 
 var lunchEvent = function()
 {
     lunchTime = lunchTimeSelector.value;
 };
 
 var napEvent = function()
 {
     napTime = hackathonTimeSelector.value;
 };

//listeners
buttonMessage.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
hackathonTimeSelector.addEventListener('change', napEvent);
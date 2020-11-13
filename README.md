## Description

The goal was to create a calendar application that would allow the user to save any events of their chouxe for each hour of the day. 

## Features

Some features included are:

- Date and Time (Central) displayed at the top of the calendar application
- A calendar with business hour time blocks
- When typing an event into the specified time, the user is able to click a button on the right hand side to save it to local storage
- When saved, the user can still see the event when the page is refreshed
- When the time passes, each time block will change according to past, present, and future

## Code Examples

- How I displayed the current time:

//let currentTime = moment().hour();

function currentTimeNow() {
    let currentDisplay = moment().format("MMMM Do YYYY, h:mm:ss a");
    currentDayEl.html(currentDisplay);
}

setInterval(currentTimeNow, 1000);

- Local storage function:

//let getLocal = localStorage.getItem("availableTime");
if (getLocal) {
    availableTime = JSON.parse(getLocal);


- How the time blocks change color according to the time

//$.each($(".time-block"), function(index, value) {
    let eventInput = parseInt($(value).attr("data-time"));    
 
    if (eventInput == currentTime) {
        $(this).find("textarea").addClass("present");
    } 
    else if (eventInput < currentTime) {
        $(this).find("textarea").addClass("past");
    } 
    else {
        $(this).find("textarea").addClass("future");
    }

})

$(".time-block").each(function() {
    $(this).find(".text-area").val(availableTime[$(this).attr("data-time")].value);
    

});

- When the user clicks the button, how the event saves 

//$(".saveBtn").on("click", function(event){
    event.preventDefault();

    var timeValue = $(this).closest(".time-block").attr("data-time");

    var textValue = $(this).closest(".time-block").find(".text-area").val();
    availableTime[timeValue].value = textValue;


## Resources

https://momentjs.com/docs/
https://www.w3schools.com/tags/tag_textarea.asp
https://stackoverflow.com/
Class recordings
My Tutor

//Elements
let currentDayEl = $("#currentDay");
let containerEl = $(".container");
let availableTime = {};

//Current Time display with function
let currentTime = moment().hour();

function currentTimeNow() {
    let currentDisplay = moment().format("MMMM Do YYYY, h:mm:ss a");
    currentDayEl.html(currentDisplay);
}

setInterval(currentTimeNow, 1000);

//Local Storage and Time Slots
let getLocal = localStorage.getItem("availableTime");
if (getLocal) {
    availableTime = JSON.parse(getLocal);
} else {
    availableTime = {
        "9": {
            time: "9",
            value: ""
        },
        "10": {
            time: "10",
            value: ""
        },
        "11": {
            time: "11",
            value: ""
        },
        "12": {
            time: "12",
            value: ""
        },
        "13": {
            time: "13",
            value: ""
        },
        "14": {
            time: "14",
            value: ""
        },
        "15": {
            time: "15",
            value: ""
        },
        "16": {
            time: "16",
            value: ""
        },
        "17": {
            time: "17",
            value: ""
        }
    };
}

// Time blocks and save buttons
for (let hour = 9; hour < 18; hour++) {

    
    // for loop to start data-time at 9 to 5pm
    $(".container").append(`
        
        <div class="row time-block" data-time="${hour}">
        <!-- hours -->
            <div class="col-sm col-md-2 hour">
            <p>${moment({hour}).format("h  a")}</p>
            </div>
        <!-- schedule -->
            <div class="col-sm col-md-10 d-flex p-0 description">
            <div class="input-group">
                <textarea class="form-control text-area"></textarea>
                <div class="input-group-append">
                <button class="saveBtn d-flex justify-content-center align-items-center">
                    <i class="far fa-save fa-2x save-icon"></i>
                </button>
                </div>
            </div>
            </div>
        </div>
        `);

    
}

//Past, present, future 
$.each($(".time-block"), function(index, value) {
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

// //save value to local storage on click
$(".saveBtn").on("click", function(event){
    event.preventDefault();

    var timeValue = $(this).closest(".time-block").attr("data-time");

    var textValue = $(this).closest(".time-block").find(".text-area").val();
    availableTime[timeValue].value = textValue;

    //Save object to local storage
    localStorage.setItem("availableTime", JSON.stringify(availableTime));


});

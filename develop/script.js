// Gain access to id of current day and create variable for date and time
var currentDayEl = $(`#current-day`);
var currentDateTime = moment().format("dddd MMM Do YYYY, h:mm a");
console.log(currentDateTime);

// Create variable for save button
var btnSave = $(".saveBtn");

// Write currentDayEl to html
currentDayEl.text(currentDateTime);

var currentTime = moment();
currentTime = currentTime.startOf("hour");

// Create start time of 9AM
startWorkTime = moment().startOf("day").add(9, "hours");

// Write each hour to html 
// 9AM
var hourNine = startWorkTime.add(0, "h");
hourNine = hourNine.format("h A");
var hourNineText = $(".hour-9");
hourNineText.text(hourNine);
// 10AM
var hourTen = startWorkTime.add(1, "h");
hourTen = hourTen.format("hh A");
var hourTenText = $(".hour-10")
hourTenText.text(hourTen);
// 11AM
var hourEleven = startWorkTime.add(1, "h");
hourEleven = hourEleven.format("hh A");
var hourElevenText = $(".hour-11");
hourElevenText.text(hourEleven);
// 12PM
var hourTwelve = startWorkTime.add(1, "h");
hourTwelve = hourTwelve.format("hh A");
var hourTwelveText = $(".hour-12");
hourTwelveText.text(hourTwelve);
// 1PM
var hourOne = startWorkTime.add(1, "h");
hourOne = hourOne.format("h A");
var hourOneText = $(".hour-1");
hourOneText.text(hourOne);
// 2PM
var hourTwo = startWorkTime.add(1, "h");
hourTwo = hourTwo.format("h A");
var hourTwoText = $(".hour-2");
hourTwoText.text(hourTwo);
// 3PM
var hourThree = startWorkTime.add(1, "h");
hourThree = hourThree.format("h A");
var hourThreeText = $(".hour-3");
hourThreeText.text(hourThree);
// 4PM
var hourFour = startWorkTime.add(1, "h");
hourFour = hourFour.format("h A");
var hourFourText = $(".hour-4");
hourFourText.text(hourFour);
// 5PM
var hourFive = startWorkTime.add(1, "h");
hourFive = hourFive.format("h A");
var hourFiveText = $(".hour-5");
hourFiveText.text(hourFive);


// Compare time of hour slot to current time

function timeCompare() {
    // Check hour nine 
    hourNine = moment().startOf("day").add(9, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourNine)){
        $(".input-9").addClass("past");
    } else if (currentTime.isBefore(hourNine)) {
        $(".input-9").addClass("future");
    } else if (currentTime.isSame(hourNine)){
        $(".input-9").addClass("present");
    };

    //Check hour ten
    hourTen = moment().startOf("day").add(10, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourTen)){
        $(".input-10").addClass("past");
    } else if (currentTime.isBefore(hourTen)) {
        $(".input-10").addClass("future");
    } else if (currentTime.isSame(hourTen)){
        $(".input-10").addClass("present");
    };

    //Check hour eleven 
    hourEleven = moment().startOf("day").add(11, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourEleven)){
        $(".input-11").addClass("past");
    } else if (currentTime.isBefore(hourEleven)) {
        $(".input-11").addClass("future");
    } else if (currentTime.isSame(hourEleven)){
        $(".input-11").addClass("present");
    };

    // Check hour twelve
    hourTwelve = moment().startOf("day").add(12, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourTwelve)){
        $(".input-12").addClass("past");
    } else if (currentTime.isBefore(hourTwelve)) {
        $(".input-12").addClass("future");
    } else if (currentTime.isSame(hourTwelve)){
        $(".input-12").addClass("present");
    };
    // Check hour one
    hourOne = moment().startOf("day").add(13, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourOne)){
        $(".input-1").addClass("past");
    } else if (currentTime.isBefore(hourOne)) {
        $(".input-1").addClass("future");
    } else if (currentTime.isSame(hourOne)){
        $(".input-1").addClass("present");
    };
    // Check hour two
    hourTwo = moment().startOf("day").add(14, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourTwo)){
        $(".input-2").addClass("past");
    } else if (currentTime.isBefore(hourTwo)) {
        $(".input-2").addClass("future");
    } else if (currentTime.isSame(hourTwo)){
        $(".input-2").addClass("present");
    };
    // Check hour three
    hourThree = moment().startOf("day").add(15, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourThree)){
        $(".input-3").addClass("past");
    } else if (currentTime.isBefore(hourThree)) {
        $(".input-3").addClass("future");
    } else if (currentTime.isSame(hourThree)){
        $(".input-3").addClass("present");
    };
    // Check hour four
    hourFour = moment().startOf("day").add(16, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourFour)){
        $(".input-4").addClass("past");
    } else if (currentTime.isBefore(hourFour)) {
        $(".input-4").addClass("future");
    } else if (currentTime.isSame(hourFour)){
        $(".input-4").addClass("present");
    };
    // Check hour 5
    hourFive = moment().startOf("day").add(17, "hours");
    currentTime = currentTime.startOf("hour");
    if (currentTime.isAfter(hourFive)){
        $(".input-5").addClass("past");
    } else if (currentTime.isBefore(hourFive)) {
        $(".input-5").addClass("future");
    } else if (currentTime.isSame(hourFive)){
        $(".input-5").addClass("present");
    };
}

timeCompare();




// btnSave.on("click", function(event){
//     event.preventDefault();
//     console.log('I was clicked');
// })


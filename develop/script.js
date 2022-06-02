// Gain access to id of current day and create variable for date and time
var currentDayEl = $(`#current-day`);
var currentDateTime = moment().format("dddd MMM Do YYYY, h:mm a");
console.log(currentDateTime);

// Write currentDayEl to html
currentDayEl.text(currentDateTime);

var currentTime = moment();
currentTime = currentTime.startOf("hour");

// Create start time of 9AM
startWorkTime = moment().startOf("day").add(9, "hours");

// Write each hour to html 
var hourNine = startWorkTime.add(0, "h");
hourNine = hourNine.format("h A");
var hourNineText = $(".hour-9");
hourNineText.text(hourNine);

var hourTen = startWorkTime.add(1, "h");
hourTen = hourTen.format("hh A");
var hourTenText = $(".hour-10")
hourTenText.text(hourTen);

var hourEleven = startWorkTime.add(1, "h");
hourEleven = hourEleven.format("hh A");
var hourElevenText = $(".hour-11");
hourElevenText.text(hourEleven);

var hourTwelve = startWorkTime.add(1, "h");
hourTwelve = hourTwelve.format("hh A");
var hourTwelveText = $(".hour-12");
hourTwelveText.text(hourTwelve);

var hourOne = startWorkTime.add(1, "h");
hourOne = hourOne.format("h A");
var hourOneText = $(".hour-1");
hourOneText.text(hourOne);

var hourTwo = startWorkTime.add(1, "h");
hourTwo = hourTwo.format("h A");
var hourTwoText = $(".hour-2");
hourTwoText.text(hourTwo);

var hourThree = startWorkTime.add(1, "h");
hourThree = hourThree.format("h A");
var hourThreeText = $(".hour-3");
hourThreeText.text(hourThree);

var hourFour = startWorkTime.add(1, "h");
hourFour = hourFour.format("h A");
var hourFourText = $(".hour-4");
hourFourText.text(hourFour);

var hourFive = startWorkTime.add(1, "h");
hourFive = hourFive.format("h A");
var hourFiveText = $(".hour-5");
hourFiveText.text(hourFive);

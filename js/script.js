
var now = new Date();
var hr = now.getHours();
var min = now.getMinutes();
var sec = now.getSeconds();

var deltaSec = 360/60;
var deltaMin = deltaSec/60;
var deltaHr = deltaMin/60;

// var HOURHAND = document.getElementsById('hour');
// var MINUTEHAND = document.querySelector('.minute');
// var SECONDHAND = document.getElementsByName('second');

function moveThoseArms(){
    $('#second').css('transform', `rotate(${deltaSec}deg)`);
    $('#minute').css('transform', `rotate(${deltaMin}deg)`);
    $('#hour').css('transform', `rotate(${deltaHr}deg)`);
    // jQuery('[name="second"]').css('transform', 'rotate(' + sec + deltaSec + 'deg)');
    // jQuery('[name="minute"]').css('transform', 'rotate(' + min + deltaMin + 'deg)');
    // jQuery('[name="hour"]').css('transform', 'rotate(' + hr + deltaHr + 'deg)');
};

setInterval(moveThoseArms, 1000);

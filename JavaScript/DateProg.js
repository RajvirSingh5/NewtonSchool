/*
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/

var today = new Date();
var day = today.getDay();
//console.log(day)
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//console.log("Today is : " + daylist[day]);

var hour = today.getHours();
//console.log("Hour : " + hour);

var minute = today.getMinutes();

//console.log("Minute : " + minute);

var second = today.getSeconds();
//console.log("Second : " + second);

console.log(`Time in 24 hour format : Day ${daylist[day]}, ${hour} hours ${minute} minutes ${second} seconds`);


/* Now convert 24 hour time format to 12 hour time format

If time <=12 prepand AM

If time> 12 prepand PM

*/
var prepand = (hour>=12)? " PM ":" AM ";
hour = (hour >=12)? hour-12: hour;

if(hour === 0 && prepand === ' PM ') {
  if(minute === 0 && second === 0) {
    hour = 12;
    prepand = 'noon';
  }
  else {
    hour = 12;
    prepand = ' PM ';
  }
}


if(hour === 0 && prepand === ' AM ') {
  if(minute === 0 && second === 0) {
    hour =12;
    prepand = 'Midnight';
  }
  else {
    hour = 12;
    prepand = ' AM ';
  }
}

console.log(`Time in 12 hour format : ${daylist[day]}, ${hour} hours ${minute} minutes ${second} seconds`);



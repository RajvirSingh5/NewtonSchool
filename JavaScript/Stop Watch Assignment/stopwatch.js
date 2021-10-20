/*  StopWatch JS*/

//To get element Stopwatch from html and store to variable timer */
const timer = document.getElementById('stopwatch');

/* variables : -
hours = hr
Minutes = min
Seconds  = sec
 */
let hr = 0,
 min = 0,
 sec = 0,
 stoptime = true;

 document.getElementById("pauseButton").disabled = true;
 document.getElementById("stopButton").disabled = true;
 
 
//fucntion to start timer when 'Start' button is clicked
function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
    document.getElementById("startButton").disabled = true;
  document.getElementById("pauseButton").disabled = false;
 document.getElementById("stopButton").disabled = false;
}


//fucntion to stop timer when 'stop' button is clicked
function stopTimer() {
  //let pauseButtonStatus = document.getElementById("pauseButton").innerHTML;

  if (stoptime == false) {
    stoptime = true;
  }

  if(document.getElementById("pauseButton").innerHTML == 'Pause'){
    document.getElementById("pauseButton").innerHTML = 'continue';
  }
  else{
    document.getElementById("pauseButton").innerHTML = 'Pause';
    startTimer();
  }

  
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;
	
	/* TimerCycle() is called after every 1000ms (1 sec). */
    setTimeout("timerCycle()", 1000);
  }
}

//fucntion to reset timer when 'reset' button is clicked
function resetTimer() {
    timer.innerHTML = '00:00:00';
	stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;

  document.getElementById("startButton").disabled = false;
  document.getElementById("pauseButton").disabled = true;
 document.getElementById("stopButton").disabled = true;
 document.getElementById("pauseButton").innerHTML = 'Pause';

}
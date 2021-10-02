
var containers = document.getElementsByClassName('container')

for(var i=0; i < containers.length; i++) {
	containers[i].addEventListener('click', displayEventPhase, true);
	containers[i].addEventListener('click', displayEventPhase, false);
}

function displayEventPhase(e) {
	var phase = e.eventPhase;
	if(1 === phase) {
		phase = 'Capturing';
	}
	else if ( 2 === phase) {
		phase = 'At Targer';
	}
	else if( 3 === phase) {
		phase = 'Bubbling';
	}
	console.log(this.id + '_' + phase)
}


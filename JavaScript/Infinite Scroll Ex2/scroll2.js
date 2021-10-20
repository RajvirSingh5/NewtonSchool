/*This content will be added */

let more = '<div style="height: 100px; background: #EEE;"></div>';

let wrapper = document.getElementById('wrapper');
let content = document.getElementById('content');
let test = document.getElementById('test');

content.innerHTML = more;

/* Cross browser addEvent. We have used addEventListener  */

function addEvent(obj,ev,fn){
	if(obj.addEventListener) obj.addEventListener(ev,fun, false);
	else if(obj.attachEvent) obj.attachEvent("on" +ev, fn);
	
}

// This is the scroll event handler

function scroller() {
	//Print relevant scroll info
	test.innerHTML = wrapper.scrollTop + "+" + wrapper.offsetHeight + "+100>" + content.offsetHeight;
	
	//add more contents if user scrolled down enouth
	if(wrapper.scrollTop+wrapper.offsetHeight + 100> content.offsetHeight) {
		content.innerHTML += more;
	}
}

// Hook the scroll handler to scroll event
addEvent(wrapper, "scroll", scroller);



		
		
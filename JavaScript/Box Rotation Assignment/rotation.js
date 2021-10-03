let count =1;

function rotate() {
	if(count %2 ==1) {
		document.getElementById("box").style.transform="rotate(180deg)"
		count=0;
	}
	else {
		document.getElementById("box").style.transform="rotate(0deg)"
		count=1;
	}
}
		
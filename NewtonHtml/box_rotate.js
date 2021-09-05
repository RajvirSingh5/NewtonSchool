const box = document.getElementById("box");
let count = 1;
box.addEventListener('mouseover',() => {
	if(count %2 ==0) {
		box.style.trasnform = "rotate(0deg)";
	}
	else{
		box.style.transfrom = "rotate(180deg)";
	}
	count++;
});
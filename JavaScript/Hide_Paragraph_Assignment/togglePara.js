function toggleVisibility() {
	let uselessPara = document.getElementById('useless-paragraph')
	if(uselessPara.style.display === "none") {
		uselessPara.style.display = "block";
	}
	else {
		uselessPara.style.display = "none";
	}
}

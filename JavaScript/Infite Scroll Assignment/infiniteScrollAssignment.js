
function addDetails() {
	while(true) {
		let bottom = document.documentElement.getBoundingClientRect.bottom;
		if(bottom > window.innerHeight + 100) {
			break;
		}
		let p = `<p>Hello... It keeps on repeating</p>`;
		document.body.insertAdjacentHTML("beforeend", p);
	}
}
window.addEventListener("scroll", addDetails);
addDetails();


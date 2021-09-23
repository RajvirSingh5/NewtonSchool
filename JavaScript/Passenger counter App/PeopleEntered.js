
const count = 0;

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment(){
	count += 1
	countEl.textContent = count;
	
}

function save() {
	let countStr = count + " ";
	saveEl.textContentStr 
	saveEl.textContent = countStr;
	count = 0;
}

console.log("Let's count people on the subway!");
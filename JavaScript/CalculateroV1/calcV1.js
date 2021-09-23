let num1 = 8
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let resultEl = document.getElementById("result-el");

function add(){
	let temp = num1 + num2;
	resultEl.textContent = "Result " + temp
}

function subtract(){
	let temp = num1-num2;
	resultEl.textContent = "Result " + temp
}

function Mult(){
	let temp = num1 * num2;
	resultEl.textContent = "Result " + temp
}

function division(){
	if(num2 !== 0) {
		let temp = num1/num2;
		resultEl.textContent = "Result " + temp
	} 
	else{
		console.log("Error! Div by zero");
		resultEl.textContent = "Error! Div by zero"
	}
}
/*
 This keyword 
By default JavaScript wil have 'this' and 'window' object.

methold ---> Object

function ---> (windo, global)

If you call 'this' inside a function it is always refer to the global object.

If you call 'this' keyword inside object method it always
*/

/*
console.log(window)

cosole.log(this);

cosole.log(windo == this); // return true;
*/

let myObj = this;
console.log(typeof this);


function a() {
	console.log(this);
}


let obj = {
	a: 10,
	function video(){
	
	}
}





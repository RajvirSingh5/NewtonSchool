/*
JS is lightweigh, interpreted, or just in time compliled
prog language with first class function.

Fucntion declaration

function a(ab) {
	return ab+2;
	
}

function expressions

var a = function (ab) {
	return ab+2;
}

Passing function as argument is called CALL BACK function.
a(function ab() {
	console.log("newton")
});

Higher Order function : Function which takes other function as argument.

var new_func = function() {
	console.log("x")
}

a(new_func); // Higher Order function

var arr = [1,2,3,4,5]
arr.forEach(arr.forEach(myFunc));

for(var i=0; i< arr.length; i++) {
	arr[i] = arr[i]*arr[i];
}

console.log(arr.map(my_func))

//map will loop though the array and apply a call back Function

function myFunc(x) {
	return x*x;
}


JS Data Types

Boolean, string, null, undefined, Number, Symbol, BigInt

Non-Primitive data type : Class

55555

5.4e10


Data types declaration

var x = l;


*/


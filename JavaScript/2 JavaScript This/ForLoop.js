

function printArray(arr){
	for(var i=0; i< arr.length; i++){
		if(typeof arr[i] == 'string') {
			console.log(arr[i] +  'its a string');
		}
	}	
}

var a = [ 1, 2, 3, 4, 5,  'hello', 7, 'world', 9];

printArray(a);
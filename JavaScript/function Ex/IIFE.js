/*
IIFE : Immediate Invoking Function Expression


(function a () {
 console.log('a');
 })();
 */
 (number = function a (param = 'hello') {
	 console.log(param);
 })();
 
 number('how are you');
 
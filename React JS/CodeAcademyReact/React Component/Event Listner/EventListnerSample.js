import React from 'react';
import ReactDOM from 'react-dom';

class MyClass extends React.Component {
	myFunc() {
		alert('Stop it. Stop hovering.');
	}
	
	render() {
		return (
			<div onHover = {this.myFun}></div>
		);
	}
}


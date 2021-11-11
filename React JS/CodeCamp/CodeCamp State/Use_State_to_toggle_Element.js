/* States update might be ansynchronous - this means 
React may batch multiple setState() calls into a single update.
This means that you can't rely on the previous value of this.state or this.props
when calculating the next values.

So below code shoud NOT be used

this.setState({
	counter: this.state.counter + this.props.increment
})

Instead you should pass setState a function that allows you to access state and props.
Using a function with setState gurantees you're working with the most current values of state and props.

below code is correct

this.setState((state, props) => ({
	counter: state.counter + props.increment
}));

*/


import React from 'react';

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visibility: false
		}
		
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}
	
	toggleVisibility() {
		if(this.state.visibility === false) {
			this.setState({
				visibility: true
			})
		}else {
			this.setState({
				visibility: false
			})
		}
	}
		
	render() {
		if(this.state.visibility) {
			return(
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
					<h1>Now you see me!</h1>
				</div>
			)
		} else{
			return(
				<div>
					<button onClick={this.toggleVisibility}>Click Me </button>
				</div>
			)
		}
	}
}





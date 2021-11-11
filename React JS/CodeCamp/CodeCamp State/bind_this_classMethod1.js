/* A class method typically needs to use the this keyword so it can access properties on the class
(such as state and props) inside the scope of the method.

One way is to explicitly bind this in the constructor so 'this' becomes bound to the class methods
when the component is initialized.

*/

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Hello"
		}
		
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick() {
		this.setState({
			text: "You Clicked!"
		});
	}
	
	render() {
		return(
			<div>
				<button onClick={handleClick}>Click Me</button>
				<h1>{this.state.text}</h1>
			</div>
		);
	}
	
}
		
	
	
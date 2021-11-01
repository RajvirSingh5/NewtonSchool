/*  React components can receive dynamic information from props, or set their
own dynamic data with state. Props are passed down by parent components,
whereas state is created and maintained by the components itself.

In the example, you can see this.state set up in the constructor, used in render()
and updated with this.setState().

this.props refers to the props,which you can see in the render() method.

*/

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showPassword: false};
	}
	render() {
		let text;
		if(this.state.showPassword) {
			text = `The password is $this.props.password}`;
		} else{
			text= `The Password is a secret`;
		}
		return(
			<div>
				<p> {text} </p>
				<button onClick={(event) => {
					event.preventDefault();
					this.setState((oldState) => ({
						showPassword: !oldState.showPassword,
					}));
				})
				>
					Toggle password
				</button>	
			</div>
		);
	}
}
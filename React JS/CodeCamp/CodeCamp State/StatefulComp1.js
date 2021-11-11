/* State conists of any data you application needs to know about, that can change over time.
You want your apps to respond to state changes and present an updated UI when necessary.

You declare a  state property on the component class in its constructor. This initializes the component with state
when it is created. The state property must be a JS object.

this.state = {
	
}

*/

class StatefulComponent extens React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: 'Rajvir'
		}
	}
	
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}






/*
stateless functional components are like pure functions that return JSX.
A stateless CLASS component is class that extends React.component, but does not use internal state.
A stateFull component is class component that maintain its own internal state.
*/

class CampSite extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render(){
		return(
			<div>
				<Camper />
			</div>
		);	
	}
}

Camper.defaultProps = {
	name: 'CamperBot';
}

Camper.proTypes = {
	quantity: PropTypes.String.isRequired
}

class Camper extends React.Component {
	constructor() {
	}
	
	render() {
		return(
		);
	}
	
}


	
	
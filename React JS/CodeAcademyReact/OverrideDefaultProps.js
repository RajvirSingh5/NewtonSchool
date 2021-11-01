const Items = (props) => {
	
	return <h1>Current quantity of Items in Cart:{props.quantity} </h1>
	
}

Items.defaultProps = {
	quantity: 0
}

class ShoppingCart extends React.component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return <Items quantity={10} />
		
	}
	
}
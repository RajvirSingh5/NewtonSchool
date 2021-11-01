/* It is a best practice to set propTypes . */

import React from 'react';
import PropTypes from 'prop-types';

const Items = (props) => {
	
	return(
		<h1>Current Quantity of Items in cart: {props.quantity}</h1>
	);
	
	
}

Items.propTypes = {
	quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
	quantity: 0,
	
}


class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		return(
			<Items />
		);
	
	
}
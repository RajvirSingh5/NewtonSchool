import React from 'react';

const inputStyle = {
	width: 235;
	margin: 5;
};

class CheckuserAge extends React.Component {
	constructor(props) {
		super(props);
		setState = {
			input: '',
			userAge: 0
		}
		
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(e) {
		this.setState({
			input: e.target.value,
			userAge: ''
		});
	}
	
	submit() {
		this.setState(state => ({
			userAge: state.input
		}));
	}
	
	render() {
		const buttonOne = <button onClick = {this.submit}>Submit</buton>
		const buttonTwo = <button>You May Ente</button>
		const buttonThree = <button>You Shall not pass</button>
	return(
		<h3>Enter Your Age to continue</h3>
		<input
			style={inputStyle}
			type='number'
			value={this.state.input}
			onChange={this.handleChange}
		/>
		<br />
		
		{
			this.state.userAge === ''
				? buttonOne
				: this.state.userAge >= 18
					? buttonTwo
					: buttonThree
		}
		
		</div>
	);
	}
}
	
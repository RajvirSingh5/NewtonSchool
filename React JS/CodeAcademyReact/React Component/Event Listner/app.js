import React from 'react';

import ReactDOM from 'react-dom';

class Button extends React.Component {
	scream(){
		alert('AAAAAAHHHHHH!!!');
	}
	
	render() {
		return <button onClick = {this.scream}>AAAH!</button>;
	}
}

ReactDOM.render(<Button />, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

class TodaysPlan extends React.Component {
	render() {
		let final;
		if(fiftyFifty) {
			final = "Tonight I'm going out WOOO";
		} else {
			final = "Tonight I'm going to bed WOOO"
		}
		return(<h1>{final}</h1>);
	}
}

ReactDOM.render(<TodaysPlan/>, document.getElementById('app'));

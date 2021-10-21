import React from 'react';
import ReactDOM from 'react-dom';
import {Greetings} from './greetings2.js';

class App extends React.Component {
	render() {
		return(
			<div>
				<h1>
					Hullo and, "Welcom to The Newzz," "on Line!"
				</h1>
				<Greetings name="Bhanu"/>
				<article>
					Latest newz: Where is my phone?
				</article>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));


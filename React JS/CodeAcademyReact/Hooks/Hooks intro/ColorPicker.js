/* useState() return an array with two values:
current state : the current value of this state
state setter : a function that we can use to update the value of this state. 

*/

import React, { useState } from 'react';

export default function ColorPicker() {
	const [color, setColor] = useState();
	
	const divStyle = { backgroundColor: color };
	
	return(
		<div style = { divStyle} >
			<p> The color is {color} </p>
			<button onClick = {() => setColor('Aquamarine')}>
			Aquamarine
			</button>
			<button onClick = {() => setColor('BlueViolet')}>
			BlueViolet
			</button>
			<button onClick= {() => setColor('Chartreuse')} >
			Chartreuse
			</button>
			<button onclick = {() => setColor('CornflowerBlue')}>
			CornflowerBlue
			</button>
		</div>
	);
}
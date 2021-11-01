import React, { useState } from 'react';

export default function ColorPicker() {
	const [color, setColor] = useState();
	
	const divStyle = { background: color};
	
	return(
		<div style={divStyle}>
			<p>The color is {color} </p>
			<button onClick={() => setColor('Aquamarine')}>
				Aquamarine
			</button>
			<button onclick={() => setColor('BlueViolet')}>
				BlueViolet
			</button>
			<button onclick={() => setColor('Chartreuse')}>
				Chartreuse
			</button>
			<button onClick={() => setColor('CornflowerBlue')}>
				CornflowerBlue
			</button>
		</div>
		
	);
}


/*
const [isLoading, setIsLoading] = useState(true);

There are three ways in which this code affects our components:
1. During the first render, the initial state argument is used.
2. When the state setter is called, React ignores the initial state argument and uses the new value.
3. When the component re-renders for any other reason, 
React continues to use the same value from the previous render.
*/

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 
	'Chartreuse', 'CornflowerBlue', 
	'Thistle', 'SpringGreen', 
	'SaddleBrown', 'PapayaWhip', 
	'MistyRose'
	];
	
export default function ColorPicket() {
	const [color, setColor] = useState();
	
	const divStyle = {backgroundColor: color};
	
	return(
		<div style={divStyle}>
			<p>Selected color: {color} </p>
				{colorNames.map((colorName) => (
					<button
						onClick={()=> setColor(colorName)}
						key={colorName}>
							{colorName}
					</button>
				))}		
		</div>
	);
	
}
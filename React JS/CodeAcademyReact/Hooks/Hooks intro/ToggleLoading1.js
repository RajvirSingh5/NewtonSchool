import React, { useState } from 'react';

function ToggleLoading () {
	const [isLoading, setIsLoading] = useState();
	
	return(
		<div>
			<p>The data is {isLoading ? 'Loading' : 'Not Loading'} </p>
			<button onClick = {() => setIsLoading(true)}>
				Turn Loading on
			</button>
			<button onClick = {() => setIsLoading(false)}>
				Turn Loading Off
			</button>
		</div>
	);
}
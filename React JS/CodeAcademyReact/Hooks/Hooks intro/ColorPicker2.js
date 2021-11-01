/*
We can use the state hook to manage the value of any primitive data type and data collections like arrays and
Object.

*/

import React, { useState } from 'react';

function ToogleLoading() {
	const [isLoading, setIsLoading] = useState();
	return(
		<div>
			<p>The data is {isLoading ? 'Loading' : 'Not Loading' }</p>
			<button onClick={() => setIsLoading(true)}>
				Turn Loading on
			</button>
			<button onClick={() => setIsLoading(false)}>
				Turn Loading off
			</button>
		</div>
	);
	
}

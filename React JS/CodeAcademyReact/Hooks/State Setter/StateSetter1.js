/* Use State setter outside of Jsx */

import React, { useState } from 'react';

export default function EmailTextInput() {
	const [email, setEmail] = useState('');
	const handleChange = (event) => {
		const updatedEmail = event.target.value;
		setEmail(updatedEmail);
	}
	
	return(
		<input value={email} onChange = {handleChange} />
	);
	
}

/*
The code works as below.
1. The square brackets on the left side of the assignment.
2. The local variable named 'email' is assigned the current state value at index 0 from the
array returned by useState().
3. The local variable named setEmail() is assigned a reference to the state setter function 
at index 1 from the array returned by useState()
4.It's convention to name this variable using the state variable (email) with 'set' prepended.
*/


import React, { useState } from 'react';
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
	const[selected, setSelected] = setState([]);
	
	const toggleTopping = ({target}) => {
		const clickedTopping = target.value;
		setSelected((prev) = {
			//check if clicked topping is already selected
			if(prev.includes(clickedTopping)) {
				//filter the clicked topping out of state
				return.prev.filter(t => t!== clickedTopping);
			} else {
				//add the clicked topping to our state
				return [clickedTopping, ...prev];
			}
		});
	};
	
	return(
		<div>
		{option.map(option => (
			<button value={option} 
				onClick = {toggleTopping}
				key={option} >
					{selected.includes(option)?'Remove':'Add'}
			</button>
		))}
		
			<p> Order a {selected.join(",")} pizza</p>
		</div>
	);
	
}

	
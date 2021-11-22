
1. With React, we feed static and dynamic data models to JSX to render a view to the screen.
2. Use Hooks to "hook into" internal component state for managing dynamic data in function component.
3. We emply the State Hook by using the code below.
	a) currentState to the reference the current value of state.
	b) stateSetter to reference a function used to update the values of this state.
	c) the initialState argument to initialize the value of state for the component's first render
	
4. Call state setters in event handlers.
5. Define simple event handlers inline with our JSX event listeners and define complex event
handers outside of our JSX.

6. Use a state setter callback function when our next value depends on our previous value.
7. Use arrays and objects to organize and manage related data that tends to change together.
8. Use the spread sytax on collections of dynamic data to copy the previous state into the next state like so:
setArrayState((prev) => [...prev] and
setObjectState((prev) => ({...prev }))

9.Split state into multiple, simpler variables instead of throwing it all into one state object.



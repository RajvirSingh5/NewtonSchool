function clock(props) {
	return(
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {props.date.toLocalTimeString()}.</h2>
		</div>
	);
}


function tick() {
	ReactDOM.render(
		<Clock date={new Date()} />,
		document.getElementById('root')
	);
}

setInterval(tick, 1000);

/* Using Classes */


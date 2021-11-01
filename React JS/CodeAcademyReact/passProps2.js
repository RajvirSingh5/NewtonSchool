const List = (props) => {
	return <p>{props.tasks.join(',')}</p>
	
}

class ToDo extends React.components {
	constructor() {
		super(props);
	}
	render(){
		return(
			<div>
				<h1> To Do Lists </h1>
				<h2> Today </h2>
				<List tasks = {["walk dog", "workout", "Coding"]} />
				<h2>Tommarow</h2>
				<List tasks = {["walk dog", "workout", "Coding"]} />
				
			</div>
		);
	}
}
/* Objet in state
When we work with a set of related variables,
it can be very helpful to group them in an object.
*/

export default function Login() {
	const[formState, setFormState] = useState({});
	
	const handleChange = ({ target }) => {
		const {name, value } = target;
		setFormState((prev) => ({
			...prev,
			[name]: value
		}));
	};
	
	return(
		<form>
			<input
				value={formState.firstName}
				onChange={handleChange}
				name="firstName"
				type="text
			/>
			<input
				value={formState.password}
				onChange={handleChange}
				type="password"
				name="password"
			/>
		</form>
	);
	
}

/*
We use a state setter callback function to update state based on the previous value.
The spread syntax is the same of objects as for arrays: {...oldObject, newKey: newValue}
We reuse our event handler across multiple inputs by using the input tag's name attribute
to identiy which input the change event came from.
*/
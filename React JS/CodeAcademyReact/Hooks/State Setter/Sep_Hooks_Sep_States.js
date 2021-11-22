/*
Separate Hooks for separate states

While there are times when it can be helpful to store related data in a data collection like an Array
or object, it can also be helpful to separate data that changes separately into completely different statesvariables.

Managin dynamic data is much easier when we keep our data models as simple as possible.

*/

//eg 1

function Subject() {
	const [state, setState] = useState({
		currentGrade: 'B',
		classmates: ['Hasan', 'Sam', 'Emma'],
		classDetails: {topic: 'Math', teacher: 'Ms.Barry', room: 201};
		exams: [{unit: 1, score: 91}, {unit:2, score:88}]
		
	});
}

setState((prev) => ({
	...prev,
	exams: prev.exams.map((exam) => {
		if(exam.unit === updatedExam.unit) {
			return {
				...exam,
				score: updatedExam.score
			};
		} else {
			return exam;
		}
	}),
}));


function Subject() {
	const [currentGrade, setGrade] = useState('B');
	
	const[classmates, setClassmates] = useState(['Hasan', 'Sam', 'Emma']);
	
	const [classDetails, setClassDetails] = useState({topic: 'Math', teacher: 'Ms. Barry', room: 201});
	
	const [exams, setExams] = useState([{unit: 1, score: 91}, 


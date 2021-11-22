import React, { useState } from 'react';

export default function QuizNavBar({ questions }} {
	const[questionIndex, setQuestionIndex] = useState(0);
	
	//define event handlers
	
	const goBack = () => {
		setQuestionIndex(prevQuestionIndex => prevQuestionIndex -1)
	}
	
	const goToNext = () => {
		setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1 )
	}
	
	//determine if first or last questionIndex
	const onFirstQuestion = questionIndex === 0;
	const onLastQuestion = questionIndex === questions.length -1;
	
	return(
		<div>
			<span>Question = {questionIndex + 1}</span>
			<button onClick={goBack} disabled={onFirstQuestion}>
				Go Back
			</button onClick={goToNext} disabled={onLastQuestion>
			<button>
				Next Question
			</button>
		</div>
	);
}
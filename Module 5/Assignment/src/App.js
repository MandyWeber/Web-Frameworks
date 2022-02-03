import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of Minnesota?',
			answerOptions: [
				{ answerText: 'St Cloud', isCorrect: false },
				{ answerText: 'Becker', isCorrect: false },
				{ answerText: 'St Paul', isCorrect: true },
				{ answerText: 'Minneapolis', isCorrect: false },
			],
		},
		{
			questionText: 'What is my favorite color?',
			answerOptions: [
				{ answerText: 'Purple', isCorrect: false },
				{ answerText: 'Green', isCorrect: true },
				{ answerText: 'Orange', isCorrect: false },
				{ answerText: 'Yellow', isCorrect: false },
			],
		},
		{
			questionText: 'What year was I born?',
			answerOptions: [
				{ answerText: '1992', isCorrect: true },
				{ answerText: '1989', isCorrect: false },
				{ answerText: '1999', isCorrect: false },
				{ answerText: '1986', isCorrect: false },
			],
		},
		{
			questionText: 'How many pets do I have?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '2', isCorrect: false },
				{ answerText: '3', isCorrect: false },
				{ answerText: '4', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score +1);
}

	const nextQuestion = currentQuestion + 1;
	if (nextQuestion < questions.length) {
	setCurrentQuestion(nextQuestion);
} else {
	setShowScore(true);
}
};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
	{questions[currentQuestion].answerOptions.map((answerOption) => (
		<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
	))}
</div>
				</>
			)}
		</div>
	);
}

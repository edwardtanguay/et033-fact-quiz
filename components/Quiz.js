import { QuizQuestion } from "./QuizQuestion";

export const Quiz = (questions) => {

	const currentQuestionIndex = 0;
	const currentQuestion = questions[currentQuestionIndex];

	const questionHTML = QuizQuestion(currentQuestion);

	return `

	${questionHTML}
	
	`;
}
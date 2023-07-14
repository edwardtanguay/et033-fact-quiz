import { QuizQuestion } from "./QuizQuestion";
import { randomize } from "../tools";

export const Quiz = (questions) => {

	randomize(questions);

	const currentQuestionIndex = 0;
	const currentQuestion = questions[currentQuestionIndex];

	const questionHTML = QuizQuestion(currentQuestion);

	return `

	${questionHTML}
	
	`;
}
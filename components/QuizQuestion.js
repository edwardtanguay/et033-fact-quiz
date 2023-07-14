import * as tools from '../tools';
import questions from '../data/questions.json';

export const QuizQuestion = (question) => {

	tools.randomize(question.choices);

	const createChoicesHtml = () => {
		let r = '';

		r += `<ul class="choices">`; 
		for (const choice of question.choices) {
			r += `<li><span class="choice" data-questionid="${question.id}">${choice.label}</span></li>`
		}
		r += `</ul>`;

		return r;
	};

	const choicesHtml = createChoicesHtml();

	return /* html */ `
	${question.text}

	${choicesHtml}
	`;
};

export const attachQuizQuestionEvents = () => {
	const _choiceElems = document.querySelectorAll("span.choice");
	const choiceElems = Array.from(_choiceElems);
	for (const choiceElem of choiceElems) {
		choiceElem.addEventListener('click', (event) => {
			const elem = event.target;
			const answer = elem.innerHTML;
			const questionid = elem.dataset.questionid;
			const question = questions.find(m => m.id === Number(questionid));
			const correctAnswer = question.choices.find(m => m.isTheAnswer).label;
			console.log('answer', answer);
			console.log('correct answer', correctAnswer);
			if (answer === correctAnswer) {
				alert('CORRECT!');
			} else {
				alert('WRONG!');
			}
		})
	}
}
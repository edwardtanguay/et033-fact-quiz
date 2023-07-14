import * as tools from '../tools';

export const QuizQuestion = (question) => {

	tools.randomize(question.choices);

	const createChoicesHtml = () => {
		let r = '';

		r += `<ul class="choices">`; 
		for (const choice of question.choices) {
			r += `<li><span class="choice">${choice.label}</span></li>`
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
		choiceElem.addEventListener('click', () => {
			alert('choice clicked');
		})
	}
}
import * as tools from '../tools';

export const QuizQuestion = (question) => {

	tools.randomize(question.choices);

	const createChoicesHtml = () => {
		let r = '';

		r += `<ul class="choices">`; 
		for (const choice of question.choices) {
			r += `<li><span>${choice.label}</span></li>`
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
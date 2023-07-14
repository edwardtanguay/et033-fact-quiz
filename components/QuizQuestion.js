export const QuizQuestion = (question) => {

	const createChoicesHtml = () => {
		let r = '';

		r += `<ul class="choices">`; 
		for (const choice of question.choices) {
			r += `<li>${choice.label}</li>`
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
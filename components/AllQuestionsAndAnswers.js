export const AllQuestionsAndAnswers = (questions) => {
	let r = '';
	for (const question of questions) {
		r += `<div class="question">${question.text}`;

		r += '<ul>';
		for (const choice of question.choices) {
			if (choice.isTheAnswer) {
				r += `<li class="correct">`;
			} else {
				r += `<li>`;
			}
			r += `${choice.label}</li>`;
		}
		r += '</ul>';

		r += '</div>';
	}

	return r;
};
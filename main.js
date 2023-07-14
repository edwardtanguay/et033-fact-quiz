import './style.scss';
import questions from './data/questions.json';

const appTitle = "Unnützes Wissensquiz";

let questionsHtml = '';
for (const question of questions) {
  questionsHtml += `<div class="question">${question.text}`;

  questionsHtml += '<ul>';
  for (const choice of question.choices) {
    if (choice.isTheAnswer) {
      questionsHtml += `<li class="correct">`;
    } else {
      questionsHtml += `<li>`;
    }
    questionsHtml += `${choice.label}</li>`;
  }
  questionsHtml += '</ul>';

  questionsHtml += '</div>';
}

document.querySelector('#app').innerHTML = `
<h1>${appTitle}</h1>

<p>There are ${questions.length} questions.</p>
<div class="questions">
  ${questionsHtml}
</div>
`;
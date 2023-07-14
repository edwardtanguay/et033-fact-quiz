import './style.scss';
import questions from './data/questions.json';
import { AllQuestionsAndAnswers } from './components/AllQuestionsAndAnswers';
import { Quiz } from './components/Quiz';

const appTitle = "Unnützes Wissensquiz";

// const mainAreaHtml = AllQuestionsAndAnswers(questions);
const mainAreaHtml = Quiz(questions);

document.querySelector('#app').innerHTML = `
<h1>${appTitle}</h1>

<p>There are ${questions.length} questions.</p>
<div class="questions">
  ${mainAreaHtml}
</div>
`;
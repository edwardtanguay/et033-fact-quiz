import './style.scss';
import questions from './data/questions.json';

const appTitle = "Unnützes Wissensquiz";

document.querySelector('#app').innerHTML = `
<h1>${appTitle}</h1>

<p>There are ${questions.length} questions.</p>
`;
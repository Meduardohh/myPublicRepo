import {
  fetchAnswers,
  fetchQuestions,
  postAnswer,
  postQuestion,
} from "./dataBaseHandler.js";

import {
  addQuestion,
  renderQuestions,
  renderAnswer,
  addAnswer,
} from "./render.js";

const questionText = document.querySelector("#questionText");
const submitQuestion = document.querySelector("#submitQuestion");
renderQuestions();
submitQuestion.addEventListener("click", () => {
  postQuestion(questionText.value);
  addQuestion(questionText.value);
});

fetchQuestions();

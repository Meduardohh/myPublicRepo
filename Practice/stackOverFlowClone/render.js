import { fetchQuestions, fetchAnswers } from "./dataBaseHandler.js";

const questionContainer = document.querySelector(".questionContainer");
function addQuestion(question) {
  let elem = document.createElement("div");
  elem.innerHTML = `<p class="rounded border border-4 col-6 justify-self-center">${question}</p>`;
  questionContainer.append(elem);
}
// const questions = fetchQuestions()
function renderQuestions(questions) {
  //     for (let i = 0; i < questions.length; ++i) {
  //       let elem = document.createElement("p");
  //       elem.innerHTML = `<div class="container-fluid col-8 mt-5 rounded border border-1">${questions[i].question}</div>`;
  //       questionContainer.append(elem);
  //     }
}
// renderQuestions(questions);

// for (let i = 0; i < questions.length; ++i) {
//   let elem = document.createElement("p");
//   elem.innerText = questions[i].question;
//   questionContainer.append(elem);
// }

function addAnswer() {}

function renderAnswer() {}

export { addQuestion, renderQuestions, renderAnswer, addAnswer };

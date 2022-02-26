import { renderQuestions } from "./render.js";

const questionContainer = document.querySelector(".questionContainer");

function postQuestion(question) {
  const obj = {
    question: question,
  };
  fetch("http://localhost:3000/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  }).then((response) => response.json);
}

function postAnswer(questionID, answer) {
  const obj = {
    question_id: questionID,
    answer: answer,
  };
  fetch("http://localhost:3000/answers", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  }).then((response) => response.json);
}

function fetchAnswers() {
  fetch("http://localhost:3000/answers").then((response) => response.json());
}

function fetchQuestions() {
  fetch("http://localhost:3000/questions")
    .then((response) => response.json())
    .then((questions) => {
      for (let i = 0; i < questions.length; ++i) {
        let elem = document.createElement("p");
        elem.innerHTML = `<div  class="container-fluid col-8 mt-5 rounded border border-1">${questions[i].question}</div>`;
        elem.setAttribute("index", `${i}`);
        questionContainer.append(elem);
        elem.addEventListener("click", () => {
          const answers=fetchAnswers()
          .then(response=>response.json())
          .then(answers=>{
            let ansArray=[]
            for(let j=0;j<answers.length;++j){
              if(answers[j].questionID===i){
                ansArray.push(answers[j])
              }

            }
            


          })
          
        });
      }
    });
}

export { fetchAnswers, fetchQuestions, postAnswer, postQuestion };

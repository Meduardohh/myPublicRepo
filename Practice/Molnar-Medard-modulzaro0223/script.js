const saveButton = document.querySelector("#saveButt");
const question = document.querySelector("#question");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const correctAnswer = document.querySelector("#correctAnswer");
const questionText = document.querySelector("#questionText");
const answerList = document.querySelector("#answerList");
const list = document.querySelectorAll(".answersList");
const retry = document.querySelector("#retry");

console.log(list);
let correct = 0;
function renderPoll(data) {
  questionText.innerText = data.question;
  list[0].innerText = data.answer1;
  list[1].innerText = data.answer2;
  list[2].innerText = data.answer3;
}

function getData() {
  return fetch("https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/21")
    .then((response) => response.json())
    .then((data) => {
      correct = Number(data.correct - 1);
      renderPoll(data);
      console.log(data);
    });
}
getData();

function postData() {
  if (!answer1.value || !answer2.value || !answer3.value)
    alert("Nem töltötted ki rendesen a formot.");
  else {
    if (correctAnswer.value < 1 || correctAnswer.value > 3)
      alert("Nem megfelelő a helyes válasz száma");
    else {
      const obj = {
        answer1: answer1.value,
        answer2: answer2.value,
        answer3: answer3.value,
        question: question.value,
        correct: correctAnswer.value,
      };
      fetch("https://6179a8bcaa7f340017404bde.mockapi.io/api/v1/question/21", {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        getData();

        return response.json();
      });
    }
  }
}

let answered = false;

function reset() {
  answer1.value = "";
  answer2.value = "";
  answer3.value = "";
  question.value = "";
  correctAnswer.value = "";
  answered = false;
  for (let i = 0; i < list.length; ++i) {
    list[i].style.color = "black";
  }
}

saveButton.addEventListener("click", () => {
  postData();
  reset();
});

for (let i = 0; i < list.length; ++i) {
  list[i].addEventListener("click", () => {
    if (answered) {
      alert(
        "Már egyszer válaszoltál. Ha még egyszer szeretnél akkor kattints a reload gombra"
      );
    } else {
      answered = true;
      if (i === correct) list[i].style.color = "green";
      else {
        list[i].style.color = "red";
      }
    }
  });
}

retry.addEventListener("click", () => {
  location.reload();
  reset();
});

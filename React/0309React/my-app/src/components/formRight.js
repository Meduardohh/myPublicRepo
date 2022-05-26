import { useState } from "react";

const FormRight = ({ ansArray, question, answer }) => {
  let clicked=false
  const clickHandler = (e) => {
    if(!clicked){
    if(e.target.innerText===ansArray[answer-1])e.target.classList.add("rightAnswer")
    else e.target.classList.add("wrongAnswer")
      clicked=true}
      else{
        alert("Már klickeltél vaze")
      }
  };

  return (
    <div id="formRight">
      <div id="question">{question}</div>
      <br />
      <div onClick={clickHandler} id="answer1">
        {ansArray[0]}
      </div>{" "}
      <br />
      <div onClick={clickHandler} id="answer2">
        {ansArray[1]}
      </div>{" "}
      <br />
      <div onClick={clickHandler} id="answer3">
        {ansArray[2]}
      </div>{" "}
      <br />
    </div>
  );
};

export default FormRight;

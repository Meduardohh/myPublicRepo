import { useState } from "react";

const FormLeft = ({ ansArray, setAnsArray,setQuestion,setAnswer }) => {
  const saveHandler = (e) => {
    e.preventDefault();
    if(e.target.correctAns>3) alert("1-3 ig írj számot a helyes megoldáshoz")
    setAnsArray(() => {
      const newArr = [e.target.ans1.value,e.target.ans2.value,e.target.ans3.value];
      return newArr
    });
    setQuestion(e.target.question.value)
    setAnswer(e.target.correctAns.value)
    
  };

  return (
    <div id="formLeft">
      <form onSubmit={saveHandler}>
        <input name="question" placeholder="question"></input>
        <br />
        <input name="ans1" placeholder="answer1"></input>
        <br />
        <input name="ans2" placeholder="answer2"></input>
        <br />
        <input name="ans3" placeholder="answer3"></input>
        <br />
        <input name="correctAns" placeholder="Correct answer"></input>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default FormLeft;

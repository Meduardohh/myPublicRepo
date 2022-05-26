import "./App.css";
import DateComponent from "./components/dateComponent";
import GetItem from "./components/getItem";
import HeaderComp from "./components/header";
import FormLeft from "./components/formLeft";
import FormRight from "./components/formRight";
import { useState } from "react";

// const arr = ["alma", 1, 2, "abc"];
// const currDate = () => {
//   return new Date(Date.now()).toString();
// };
// const getItem = (index) => arr[index];

function App() {
  const [ansArray, setAnsArray] = useState([]);
  const [answer, setAnswer] = useState();
  const [question, setQuestion] = useState();

  return (
    <>
      <HeaderComp />
      <br />
<div id="form">
      <FormLeft
        setAnswer={setAnswer}
        setQuestion={setQuestion}
        setAnsArray={setAnsArray}
        ansArray={ansArray}
      />
      <FormRight answer={answer} question={question} ansArray={ansArray} />
      </div>

      {/* <DateComponent currDate={currDate} />
      <GetItem selectedIndex={3} getItem={getItem} />  */}
    </>
  );
}

export default App;

import './App.css';
import ToDoComponent from './components/ToDoComponent';
import {useState} from "react"


function App() {

  const [arr,setArr]=useState([1,2,3])

  return (
  <>
  <ToDoComponent toDoArr={arr} setToDoArr={setArr}>
     
  </ToDoComponent>
  </>
  );
}

export default App;

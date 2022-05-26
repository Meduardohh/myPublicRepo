import "./App.css";
import List from "./components/List";
import {useState} from "react"




function App() {
  const originalList=["batman","superman","faszomtudja"]
  const [list,setList]=useState(originalList)
  
  return (
    <>
      {/* <List list={originalList}/> */}
      <List originalList={originalList} setList={setList} list={list}/>
    </>
  );
}

export default App;

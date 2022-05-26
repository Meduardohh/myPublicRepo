import { createContext,useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";
import NavBar from "./components/NavBar";
import { LangContext } from "./contexts/LangContext";

export const HelloWorldContext = createContext();



function App() {

  const [lang,setLang]=useState()

  return (
    <div className="App">
      <LangContext.Provider value={
        {
          lang:lang,
        setLang:setLang
      }
      } >
        <NavBar/>
        <Child1 />
        </LangContext.Provider>
    </div>
  );
}

export default App;

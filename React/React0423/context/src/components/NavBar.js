import React, { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function NavBar() {
  const language = useContext(LangContext);

  const langHandler = (e) => {
    language.setLang(e.target.value);
    console.log(language.lang);
  };
  return (
    <div>
      <select onChange={langHandler}>
        <option>ENG</option>
        <option>HUN</option>
      </select>
    </div>
  );
}

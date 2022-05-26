import React, { useContext } from "react";
import { LangContext } from "../contexts/LangContext";

export default function Child2() {
  const language = useContext(LangContext);
  return (
    <div>
      {language?.lang === "HUN"
        ? "Magyarra van állítva"
        : "It has been set to english"}
    </div>
  );
}

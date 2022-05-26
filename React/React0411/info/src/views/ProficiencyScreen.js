import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { database } from "../config/firebase";

const endpoint = "mxn/knowledge";

const ProficiencyScreen = () => {
  const [proficiency, setProficiency] = useState([]);

  useEffect(() => {
    const refKnowledge = ref(database, endpoint);
    get(refKnowledge)
      .then((snapshot) => {
        const allData = Object.entries(snapshot.val());
        setProficiency(allData);
        console.log(allData);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <div>
        {proficiency &&
          proficiency.map((prof) => {
            return (
              <div key={`prof_${prof[0]}`} className="stackbox">
                <NavLink to={`/proficiency/${prof[0]}`}>
                  {prof[1]?.type}
                </NavLink>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProficiencyScreen;

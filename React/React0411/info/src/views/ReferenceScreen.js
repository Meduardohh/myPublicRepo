import { NavLink } from "react-router-dom";
import { database } from "../config/firebase";
import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const ReferenceScreen = () => {
  const [reference, setReference] = useState([]);

  useEffect(() => {
    const refReference = ref(database, "mxn/references");
    onValue(refReference, (snapshot) => {
      setReference(Object.entries(snapshot.val()) || []);
      console.log(Object.entries(snapshot.val()));
    });
  }, []);
  return (
    <>
      <div className="stackbox">
        {reference &&
          reference.map((item) => {
            return (
              <NavLink
                key={`reference_${item[1].name}`}
                to={`/reference/${item[0]}`}
              >
                {item[1]?.name}
              </NavLink>
            );
          })}
      </div><br/>
    </>
  );
};

export default ReferenceScreen;

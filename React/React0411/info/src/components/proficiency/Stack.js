import { useEffect, useState } from "react";
import { database } from "../../config/firebase";
import { ref, get } from "firebase/database";
import { useParams } from "react-router-dom";

const endpoint = "mxn/knowledge";

const Stack = () => {
  const [proficiency, setProficiency] = useState(null);
  const { stack_id } = useParams();

  useEffect(() => {
    const data = ref(database, `${endpoint}/${stack_id}`);
    get(data)
      .then((snapshot) => {
        setProficiency(Object.entries(snapshot.val()));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {proficiency && (
        <div>
          <h2>{proficiency[1][1]}</h2> <p>{proficiency[0][1]}</p>
        </div>
      )}
    </div>
  );
};

export default Stack;

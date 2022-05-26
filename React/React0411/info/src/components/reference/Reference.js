import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "../../config/firebase";

const Reference = () => {
  const { reference_id } = useParams();
  const endpoint = "mxn/references";
  const [reference, setReference] = useState();

  useEffect(() => {
    const refReference = ref(database, `${endpoint}/${reference_id}`);
    get(refReference)
      .then((snapshot) => {
        setReference(Object.entries(snapshot.val()));
        console.log(Object.entries(snapshot.val()));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    reference && (
      <div>
        <h2>{reference[2][1]}</h2>
        <img src={`${reference[1][1]}`} />
        <p>{reference[0][1]}</p>
      </div>
    )
  );
};

export default Reference;

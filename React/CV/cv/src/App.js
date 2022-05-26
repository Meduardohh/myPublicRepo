import "./App.css";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { useEffect, useState } from "react";
import { data } from "./data/data";
import { createData, getData } from "./firebase/firebase";

function App() {
  const [cvData, setCvData] = useState({});

  useEffect(() => {
    getData().then((snapshot) => setCvData(snapshot.val()));

    //   createData(data).then(() => console.log("data created"));
  }, []);

  return (
    <div className="App">
      <div className="cvBody">
        <div className="cvBody-left">
          <LeftSide dataLeft={cvData.dataLeft} />
        </div>
        <div className="cvBody-right">
          <RightSide dataRight={cvData.dataRight} />
        </div>
      </div>
    </div>
  );
}

export default App;

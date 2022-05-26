import "./App.css";
import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [image] = useState([
    "https://placedog.net/500",
    "https://placedog.net/300",
    "https://placedog.net/200",
    "https://placedog.net/400",
  ]);

  const [index, setIndex] = useState(0);

  return (
    <>
      <Slider index={index} setIndex={setIndex} image={image} />
    </>
  );
}

export default App;

import "./App.css";
import Title from "./components/Text.js";
import MyImage from "./images/images";
import Paragraph from "./components/Paragraph";
import "./image.css";

function Main() {
  return (
    <div className="App">
      <Title />
      <MyImage />
      <Paragraph />
    </div>
  );
}

export default Main;

import logo from "./logo.svg";
import "./App.css";
import PicComponent from "./components/PicComponent";
import SmallPic from "./components/smallPic";
import Label from "./components/Label";
import Sold from "./components/Sold";

function App() {
  return (
    <>
      {/* <PicComponent component={<div>Leiras</div>} />
  <PicComponent  component={<button>Button genyo</button>}/>
  <PicComponent component={<h2>A faszomtudja </h2>} /> */}
      <Label bookLabel="konyv" />
      <SmallPic src="http://placekitten.com/200/300" />
      <Sold sold="eladva" />
    </>
  );
}

export default App;

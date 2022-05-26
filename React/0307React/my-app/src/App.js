import logo from "./logo.svg";
import "./App.css";
import DataSheet from "./components/data";
import Placing from "./components/placing";
import Pair from "./components/pair";

function App() {
  const data = {
    id: 1,
    name: "Kisallat neve: Béla",
    species: "Fajta pl cica",
    age: "Kor pl; 10",
    img: "/img/doggo.jpg",
    pedigree: true,
    other: null,
  };
  const arr=[1,2,3,4,5,6,7]

  return (
    <>
  <DataSheet data={data}></DataSheet>
  <Placing data={["Béla", "Sanyi", "Réka", "Alma"]}/>
  <Pair className="easy" data={arr}/>

  </>
    );
}

export default App;

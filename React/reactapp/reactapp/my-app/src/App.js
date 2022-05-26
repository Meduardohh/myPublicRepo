// import logo from './logo.svg';
import "./App.css";
import User from "./components/user";
import Sum from "./components/sum";
import Arr from "./components/Arr";
const logged = true;

function App() {
  const arr = [1, 2, 3, 4, 5, 65];
  return (
    <header>
      <User logged={logged} />
      <Sum a={2} b={4} />
      <Arr arr={arr} />
    </header>
  );
}

export default App;

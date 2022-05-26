import "./App.css";
import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import AboutScreen from "./screens/AboutScreen";
import Employee from "./components/Employee";
import Employees from "./components/Employees";

function App() {
  const location = useLocation();

  const enableLayout = () => {
    if (location.pathname === "/" || location.pathname === "/about") {
      return true;
    }
    return false;
  };

  console.log(location);

  return (
    <div className="App">
      header
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <NavLink
            to="/contactus"
          >
            Contact us
          </NavLink>
        </li>
        <li>
          <Link to="employee">Employee</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/employee" element={<Employees />} />
        <Route path="employee/:name" element={<Employee />} />
        <Route path="/" element={<div>Fő oldal</div>} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contactus" element={<ContactUs></ContactUs>} />
        <Route path="*" element={<div>Ilyen nincs baszdmeg</div>} />
      </Routes>
      footer
    </div>
  );
}

export default App;

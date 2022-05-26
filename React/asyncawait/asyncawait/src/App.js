import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1>Főoldal</h1>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

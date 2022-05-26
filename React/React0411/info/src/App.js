import {
  Routes,
  Route,
  Link,
  NavLink,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutScreen from "./views/AboutScreen";
import ProficiencyScreen from "./views/ProficiencyScreen";
import ReferenceScreen from "./views/ReferenceScreen";
import BlogScreen from "./views/BlogScreen";
import Layout from "./components/layout/Layout";
import Stack from "./components/proficiency/Stack";
import Reference from "./components/reference/Reference";
import BlogPost from "./components/blog/BlogPost";
import Login from "./components/Login";
import PassReset from "./components/PassReset";
import LoginLayout from "./components/layout/LoginLayout";
import ProfileLayout from "./components/layout/ProfileLayout";
import { auth } from "./config/firebase";
import { AuthCredential, onAuthStateChanged } from "firebase/auth";

function App() {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUserLogged(true);
      } else {
        setUserLogged(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/proficiency" element={<ProficiencyScreen />} />
          <Route path="/proficiency/:stack_id" element={<Stack />} />
          <Route path="/reference" element={<ReferenceScreen />} />
          <Route path="/reference/:reference_id" element={<Reference />} />
          <Route path="/blogposts" element={<BlogScreen />} />
          <Route path="/blogposts/:blog_id" element={<BlogPost />} />
        </Route>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/passwordreset" element={<PassReset />} />
        </Route>

        {userLogged && (
          <Route element={<ProfileLayout />}>
            <Route path="/adatlap" element={<div>Adatlap</div>} />
            <Route path="/ujpost" element={<div>ujpost</div>} />
            <Route path="/fasztudja" element={<div>Fasztudja</div>} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;

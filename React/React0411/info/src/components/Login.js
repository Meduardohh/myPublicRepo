import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);


  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPassword(e.target.value);
  };

  const signUpHandler = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authCredential) => {
        console.log("user", authCredential.user);
      })
      .catch((e) => console.log(e));
  };

  const signInHandler = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((authCredential) => {
        console.log(authCredential.user);
        navigate("/adatlap");
      })
      .catch((e) => setLoginError(e.message));
  };

  return (
    <div>
      {loginError}
      <br />
      User:
      <input type="text" name="email" onChange={emailHandler} />
      <input type="text" name="password" onChange={passHandler} />
      <button onClick={signUpHandler} type="submit" name="login">
        sign up
      </button>
      <button onClick={signInHandler} type="submit" name="login">
        Login
      </button>
    </div>
  );
};

export default Login;

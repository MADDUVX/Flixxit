import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password },dispatch);
  };

  return (
    <>
    <Link to="/" className="link">
    <button className="backToApp">Return to app</button>
    </Link>
    <div className="login">
    <span>Admin Login</span>
      <form className="loginForm">
        <input
          type="text"
          placeholder="Enter admin email.."
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter admin password.."
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
    </>
  );
}

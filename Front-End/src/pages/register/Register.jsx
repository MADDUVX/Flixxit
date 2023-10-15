import { useState, useRef } from "react";
import "./register.css";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();


  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async() => {
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
    console.log(username,password,email);
    try{
    await axios.post("/api/auth/register",{email,password,username});
    navigate("/login")
    }
    catch(error){
      console.log(error)
    }

  };

  return (
    <div className="register">
      <div className="top">
        <img
          className="registerLogo"
          src="/StreamIt.png"
          alt="StreamIt-logo"
        />
        <Link to="/login" className="link">
        <Button variant="contained" className="loginBtn">
          Sign In
        </Button>
        </Link>
      </div>
      <div className="regcontainer">
        <h1>Unlimited Movies and TV Shows and more</h1>
        <h2>Watch anywhere. Cancel Anytime</h2>
        <p>Ready to Watch? Register and Start your membership today</p>
        {!email ? (
          <div className="input">
            <input
              type="email"
              name="Email"
              placeholder="Enter Email address.."
              ref={emailRef}
            />
            <Button
              variant="contained"
              className="regButton"
              onClick={handleStart}
            >
              Get Started
            </Button>
          </div>
        ) : (
          <>
          <form className="input">
          <input type="username" placeholder="username" ref={usernameRef} />
           <input type="password" placeholder="Password" ref={passwordRef} />
            <Button
              variant="contained"
              className="regButton"
              onClick={handleFinish}
            >Finish</Button>
          </form>
          <h4>Username should be unique, min 8 chars and Password must contain atleast 1 Capital, 1 special character and 1 number </h4>
          </>
        )}
      </div>
    </div>
  );
}

export default Register;

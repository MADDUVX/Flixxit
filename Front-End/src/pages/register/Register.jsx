import { useState, useRef } from "react";
import "./register.css";
import { Button } from "@mui/material";


function Register() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();


  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <img
          className="registerLogo"
          src="/StreamIt.png"
          alt="StreamIt-logo"
        />
        <Button variant="contained" className="loginBtn">
          Sign In
        </Button>
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
          <form className="input">
           <input type="password" placeholder="Password" ref={passwordRef} />
            <Button
              variant="contained"
              className="regButton"
              onClick={handleFinish}
            >Finish</Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;

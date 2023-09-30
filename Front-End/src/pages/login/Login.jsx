import { useState, useRef } from "react";
import "./login.css";
import { Button } from "@mui/material";


function Login() {
  
  return (
    <div className="login">
      <div className="top">
        <img
          className="registerLogo"
          src="/StreamIt.png"
          alt="StreamIt-logo"
        />
      </div>
      <div className="logcontainer">
       <form >
       <h1>Sign In</h1>
       <input type="text" name="email" id="email" placeholder="Enter your Email Address..." />
       <input type="password" name="password" id="password" placeholder="Enter your Password..."/>
       <Button variant="contained" className="loginBtn">Sign In</Button>
       <span>New to Netflix? <b>Sign up Now</b></span>
       <small>
        The page is protect Google reCAPTCHA to ensure you're not a bot.
        <b>Learn more </b>
       </small>
       </form>
      </div>
    </div>
  );
}

export default Login;

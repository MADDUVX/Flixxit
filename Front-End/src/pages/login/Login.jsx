import { useState, useContext} from "react";
import "./login.css";
import { Button } from "@mui/material";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password },dispatch);
  };

  return (
    <div className="login">
      <div className="top">
        <img
          className="loginLogo"
          src="/StreamIt.png"
          alt="StreamIt-logo"
        />
      </div>
      <div className="logcontainer">
       <form >
       <h1>Sign In</h1>
       <input type="text" name="email" id="email" placeholder="Enter your Email Address..." onChange={(e) => setEmail(e.target.value)}/>
       <input type="password" name="password" id="password" placeholder="Enter your Password..." onChange={(e) => setPassword(e.target.value)}/>
       <Button variant="contained" className="loginBtn" onClick={handleLogin}
       disabled={isFetching}>Sign In</Button>
       <span>New to Netflix? 
       <Link to="/register" className="link">
       <b>SignUp Now</b>
       </Link>
       </span>
       <small>
        The page is protected by  Google reCAPTCHA to ensure you're not a bot.
        <b> Learn more</b>
       </small>
       </form>
      </div>
    </div>
  );
}

export default Login;

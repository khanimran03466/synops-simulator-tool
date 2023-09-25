import React, { useEffect, useState } from "react";
import { HiMiniCheckCircle } from "react-icons/hi2";

import accentureLogo from "../images/icons/accenturelogo.png";

const Login = ({ isUserLoginHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (username == "synopsuser" && password == "synopspassword") {
      sessionStorage.setItem("userLogin", "login");
      isUserLoginHandler("login");

      // const isUserLogin = sessionStorage.getItem("userLogin");

      // if(isUserLogin=="login"){
      //     isUserLoginHandler("login");
      // }else{
      //     isUserLoginHandler("notLogin");
      // }
    }
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    const isUserLogin = sessionStorage.getItem("userLogin");
    if (isUserLogin == "login") {
      isUserLoginHandler("login");
    }
  }, []);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="login-logo">
          <img src={accentureLogo} alt="accenture logo" />
          <h2> Sign in </h2>
        </div>
        <form action="">
          <div className="form-group">
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Username"
                value={username}
                name="username"
                onChange={usernameHandler}
                className={username == "synopsuser" ? "green" : "red"}
                required
              />
              <HiMiniCheckCircle />
            </div>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={passwordHandler}
                className={password == "synopspassword" ? "green" : "red"}
                required
              />
              <HiMiniCheckCircle />
            </div>
            <p title="synopsuser synopspassword">Hint?</p>
            <button type="submit" onClick={formHandler}>
              Login
            </button>
          </div>
        </form>
        <div className="warning-text">
          <p>
            Unauthorized access or activity of this system is a violation of
            Accenture Policies and may be a violation of law. Unauthorized use
            may result in reprimand, dismissal, financial penalties, and legal
            action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

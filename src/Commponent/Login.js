import React from "react";
import DriveImg from "../Images/google-drive.png";
import "../css/Login.css";
const Login = ({ singIn }) => {
  return (
    <>
      <div className="login-compo">
        <div className="login">
          <img className="login-image" src={DriveImg} alt="drive.png" />
          <button className="login-btn" onClick={singIn}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

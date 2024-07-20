import React from "react";
// import "./Login.css";

import { Link } from "react-router-dom";

const LoginSignUp = () => {
  return (
    <div className="LoginContainer">
      <div className="LoginContainerLeft">
        <div className="LoginContainerLeftTop">
          <p
            className="inter bold"
            style={{
              fontSize: "24px",
              fontWeight: "600",
              margin: "0px",
              padding: "0px",
            }}
          >
            Welcome back
          </p>
          <p
            className="inter"
            style={{ fontSize: "16px", marginTop: "16px", padding: "0px" }}
          >
            Login to your account
          </p>
        </div>

        <div className="LoginContainerLeftCenter">
          {/* <img className="LoginIcon" src={PersonIcon} alt="" /> */}
          <span>Email or Phone number</span>
          <input
            className="LoginInput"
            type="text"
            style={{ marginBottom: "20px", marginRight: "16px" }}
          />
          {/* <img className="LoginIcon" src={LockIcon} alt="" /> */}
          <span>Password</span>
          <input className="LoginInput" type="text" />
          <div
            style={{ marginLeft: "398px", marginTop: "8px", color: "#fa902d" }}
          >
            Forget Password?
          </div>
        </div>

        <div className="LoginContainerLeftBottom inter">
          <button className="LoginButton inter">Login</button>
          <p
            style={{
              padding: "0",
              margin: "0",
              fontSize: "16px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Don't have an account?{" "}
            <span style={{ color: "#fa902d" }}>
              <Link className="LoginLink" to="/signup">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className="LoginContainerRight">
        {/* <img src={Loginimg} alt="" /> */}
      </div>
    </div>
  );
};

export default LoginSignUp;

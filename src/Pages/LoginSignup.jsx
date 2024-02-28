import React, { useState } from "react";
import "./CSS/LoginSignUp.css";

const LoginSignUp = () => {
  const [state, setState] = useState("Login");

  const login = async () => {
    console.log("Login Function Executed");
  };

  const signUp = async () => {
    console.log("Sign Up Function Executed");
  };

  return (
    <div className="login-sign-up">
      <div className="login-sign-up-container">
        <h1>{state}</h1>
        <div className="login-sign-up-fields">
          {state === "Sign Up" ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signUp();
          }}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="login-sign-up-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="login-sign-up-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        )}

        <div className="login-sign-up-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;

import React, { Component, useState } from "react";
import Input from "./common/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setEmailError("a email is required");
    } else {
      setEmailError("");
    }
    console.log("it has been submitted");
  };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    if (e.currentTarget.name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div class="container">
      <div className="row align-items-center vh-100">
        <div className="col-4"></div>
        <div className="col-4 card">
          <div className="card-body">
            <h5 class="card-title">Login</h5>
            <form onSubmit={handleSubmit}>
              <Input
                name="email"
                label="Email"
                value={email}
                onChange={handleChange}
              />
              {emailError && (
                <div className="alert alert-danger">{emailError}</div>
              )}
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  type="text"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">LOGIN</button>
            </form>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Login;

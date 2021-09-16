import React, { Component, useState, useEffect } from "react";
import Input from "../components/common/input";
import jwtDecode from "jwt-decode";
import "../image/img.css";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");

  const loginRegulation = () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    if (user.role_id == 1) {
      props.history.push("/client/dashboard");
    } else if (user.role_id == 2) {
      props.history.push("/attorney/dashboard");
    } else if (user.role_id == 3) {
      props.history.push("/admin/dashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`http://localhost:8000/login`, {
        email,
        password,
      });
      localStorage.setItem("token", result.data);
      loginRegulation();
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const value = e.target.value;
      setEmail(value);
    } else {
      const value = e.target.value;
      setPassword(value);
    }
  };

  const handleSignUp = () => {
    props.history.push("/registration");
  };

  return (
    <div class="container img">
      <div className="row align-items-center vh-100">
        <div className="col-4"></div>
        <div className="col-4 card bg-secondary">
          <div className="card-body mt-4">
            <h5 class="card-title fs-3 text-white">Login</h5>
            <form className="text-light fs-4" onSubmit={handleSubmit}>
              <div className="form-group">
                <Input
                  name="email"
                  label="Email"
                  value={email}
                  onChange={handleChange}
                />
                {emailError && (
                  <div className="alert alert-danger">{emailError}</div>
                )}
              </div>
              <div className="form-group mb-4">
                <Input
                  value={password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  id="password"
                  type="text"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">LOGIN</button>
              <div className="pt-4 mb-2">
                <button
                  className="btn btn-outline-warning me-2"
                  onClick={handleSignUp}
                >
                  Sign up as attorney
                </button>
                <button
                  className="btn btn-outline-warning ms-2"
                  onClick={handleSignUp}
                >
                  Sign up as Client
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Login;

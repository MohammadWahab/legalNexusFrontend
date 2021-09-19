import React, { Component, useState, useEffect } from "react";
import Input from "../components/common/input";
import jwtDecode from "jwt-decode";
import "../image/img.css";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [emailError, setEmailError] = useState("");

  const loginRegulation = () => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);
    if (user.role_id == 1) {
      if (user.is_permitted) {
        props.history.push("/client/dashboard");
      } else {
        setErrorMsg(
          "You Have Been Restricted To Use Service As Client in our site"
        );
      }
    } else if (user.role_id == 2) {
      if (user.is_permitted) {
        props.history.push("/attorney/dashboard");
      } else {
        setErrorMsg(
          "You Have Been Restricted To Use Service As Attorney in our site,contact with Admin for further query"
        );
      }
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
    <div className=" img">
      <div className="container row align-items-center vh-100 mx-auto">
        {errorMsg && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <svg
              className="bi flex-shrink-0 me-2"
              width="24"
              height="50"
              role="img"
              aria-label="Danger:"
            ></svg>
            <div>{errorMsg}</div>
          </div>
        )}
        <div
          className="col-4 card mx-auto"
          style={{ background: "rgba(108, 117, 125, 0.4)" }}
        >
          <div className="card-body mt-4">
            <h5 className="card-title fs-3 text-white text-center">Login</h5>
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
                  type="password"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">LOGIN</button>
              <div className="pt-4 mb-2 d-flex">
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
      </div>
    </div>
  );
};

export default Login;

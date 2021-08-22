import React, { Component } from "react";
import blank_person from "../img/blank_person";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <img src={blank_person} alt="blank_person" className="w-2" />
          <form className="d-flex flex-column" id="login-form">
            <div className="form-email mb-3">
              <label htmlFor="email">
                Email adress
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Your Email"
              />
            </div>
            <div className="form-password">
              <label htmlFor="password">
                Password
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-lock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                </svg>
              </label>
              <input
                type="text"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Your Password"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              SignIn
            </button>
          </form>
          <p>Don't have an account?</p>
          <Link
            to="/Registration/attorney"
            className="text-decoration-none text-blue "
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;

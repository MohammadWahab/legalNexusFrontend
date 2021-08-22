import React, { Component } from "react";
import Logout from "./login_authentication/logout";
import { Route, Link } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar bg-secondary fs-5 p-3">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand text-light fs-1" href="#">
            Lawyer Consultency
          </a>
          {/* Menu */}
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <a
                className="nav-link text-warning fs-4 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-warning fs-4" href="#">
                Features
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link text-warning fs-4" href="#">
                Pricing
              </a>
            </li>
            <Link
              to="/logout"
              className="text-info fs-4 text-decoration-none p-2"
            >
              Log Out
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;

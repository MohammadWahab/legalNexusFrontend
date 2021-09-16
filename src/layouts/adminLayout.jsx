import React, { Component, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import jwtDecode from "jwt-decode";
import logo from "../image/logo.png";
const AdminLayout = (props) => {
  const [userName, setUserName] = useState("");
  const handleDashboard = () => {
    props.history.push("/admin/dashboard");
  };
  const handleClientList = () => {
    props.history.push("/admin/client/list");
  };
  const handleAttorneyList = () => {
    props.history.push("/admin/attorney/list");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/login");
  };

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    const user = jwtDecode(jwt);

    const fullName = [user.first_name, user.last_name].join(" ");
    setUserName(fullName);
  });
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-success mb-5">
        <div className="container">
          {/* Logo */}
          <Link to="#">
            <img className="w-50" src={logo} alt="logo" />
          </Link>
          <button className="btn btn-danger fs-5" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </nav>
      {/* Nav END */}
      {/* container starts here */}
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 d-flex justify-content-center bg-warning text-light fs-2 bg-opacity-75 p-5">
            {userName}
          </div>
        </div>
        <div className="row">
          <div className="col-3 ">
            <div class="card">
              <div class="card-header">Featured</div>
              <ul class="list-group list-group-flush">
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleDashboard}
                >
                  Dashboard
                </li>
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleClientList}
                >
                  Client List
                </li>
                <li
                  class="list-group-item"
                  type="button"
                  onClick={handleAttorneyList}
                >
                  Attorney List
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AdminLayout);
